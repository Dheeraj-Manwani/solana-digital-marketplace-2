"use client";

// import { useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from "uuid";
import { Icon } from "./Icon";
import { checkValidImageExtension } from "@/app/lib/utils";
import { toast } from "sonner";
// import Image from "next/image";
// import { uploadFile } from "@/actions/index";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDERS_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(
  app,
  `gs://${process.env.NEXT_PUBLIC_STORAGE_BUCKET}`
);

export function MultiFilepnd({
  label,
  src,
  setSrc,
}: {
  label: string;
  src: string[];
  setSrc: (src: string[]) => void;
}) {
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && src.length < 5) {
      const file = e.target.files[0];
      const splittedFile = file.name.split(".");
      const extension = splittedFile[splittedFile.length - 1];
      if (!checkValidImageExtension(extension)) {
        return;
      }
      const toastId = toast.loading("Uploading file, please wait...");
      const fileNameWithoutSpecialChars = file?.name.replace(
        /[^a-zA-Z0-9]/g,
        ""
      );
      const fileName = fileNameWithoutSpecialChars.slice(0, -extension.length);
      const storageRef = ref(
        storage,
        `Products/${fileName + uuidv4() + "." + extension}`
      );

      await uploadBytes(storageRef, file);

      const url = await getDownloadURL(storageRef);
      toast.success("File Uploaded!", { id: toastId });
      const newUrlList = [...src, url];
      setSrc(newUrlList);
    }
  };

  return (
    <div className="mt-5">
      <label
        htmlFor="email"
        className="block mb-5 text-sm font-medium  text-white"
      >
        {label}
      </label>
      <div className="flex gap-5">
        <div className="flex gap-5">
          {src && src.length ? (
            src.map((href) => (
              <div key={uuidv4()}>
                <button
                  className="w-52 flex flex-row-reverse"
                  data-href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    const newHrefs = src.filter((a) => a !== href);
                    setSrc(newHrefs);
                  }}
                >
                  <Icon
                    type="cross"
                    style="size-6 absolute rounded-[50%] cursor-pointer"
                  />
                </button>
                {/* <Image
                  height={5}
                  width={5}
                  alt="Profile Pic"
                  className="rounded-lg z-10 p-2 w-52"
                  src={href}
                  id="profile-image"
                /> */}
              </div>
            ))
          ) : (
            <></>
          )}
        </div>

        {src.length < 5 && (
          <div className="ml-2 h-full rounded-lg cursor-pointer flex flex-col justify-center items-center max-h-52 m-auto">
            <label
              htmlFor="profile-image-upload"
              className=" rounded-lg cursor-pointer flex flex-col justify-center items-center"
            >
              <Icon type="plus" />
            </label>
            <input
              id="profile-image-upload"
              className="hidden"
              type="file"
              onChange={handleFileChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}
