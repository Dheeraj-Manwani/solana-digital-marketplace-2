"use client";

import React, { useEffect, useState } from "react";
import { Textarea } from "@/app/components/Textarea";
import { Input } from "@/app/components/Input";
import { MultiFilepnd, uploadAttachment } from "@/app/components/MultiFilepond";
import { Button } from "@/app/components/Button";
import { saveProduct } from "@/actions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Product } from "@/app/lib/zod";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { Attachment } from "@/app/components/Attachment";
import { AlertWarning } from "@/app/components/Alert";
import { AUTH } from "@/app/lib/data";

export default function NewProduct() {
  const session = useSession();
  const router = useRouter();
  const { publicKey, signMessage } = useWallet();

  const [imgUrl, setImgUrl] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");
  const [asset, setAsset] = useState<File | null>(null);

  useEffect(() => {
    if (session.status === AUTH.UN_AUTHENTICATED) {
      // signIn("google");
    }
    console.log("session inside the use eff  ", session);
  }, [session.status]);

  const handleSubmit = async () => {
    if (!publicKey) {
      toast.error("Please connect a wallet for payment");
      return;
    }

    if (!asset) {
      toast.error("Upload the product to sell");
      return;
    }

    const zodres = Product.safeParse({
      // @ts-expect-error aaaaaaaaaaaaaaaaaaaa
      // aaaaaaaaaaaaaaaaaaaaaaaa
      id: session.data.user.uid,
      title,
      description,
      cost: Number(cost),
      images: imgUrl,
    });

    if (!zodres.success) {
      toast.error(zodres.error.issues[0].message);
      return;
    }

    const message = new TextEncoder().encode(
      "Sign in to project made by Dheeraj for Solana 100xdevs hackathon?"
    );
    const signature = await signMessage?.(message);

    if (session.data) {
      const toastId = toast.loading("Submitting Product...");
      const splittedFile = asset.name.split(".");
      const extension = splittedFile[splittedFile.length - 1];
      const assetLink = await uploadAttachment(
        asset,
        extension,
        "PRODUCT_ASSETS"
      );
      const { success, message } = await saveProduct(
        // @ts-expect-error aaaaaaaaaaaaaaaaaaaaa
        // aaaaaaaaaaaaaaaaaaa
        session.data.user.uid,
        title,
        description,
        Number(cost),
        imgUrl,
        publicKey.toString(),
        signature,
        assetLink
      );
      if (success) {
        toast.success(message, { id: toastId });
        router.push("/products");
      } else {
        toast.error(message, { id: toastId });
      }
    } else {
      toast.error("You need to login to post a product!!");
    }
  };

  return (
    <div className="pt-24 pb-52 bg-gray-900">
      <div className="w-full flex justify-center">
        <h1 className="mt-2 mb-4 text-2xl font-bold leading-none tracking-tight md:text-5xl lg:text-4xl text-white">
          Post a{" "}
          <span className="underline underline-offset-3 decoration-4 decoration-blue-600">
            Product
          </span>
        </h1>
      </div>
      <form className="w-1/2 m-auto">
        <Input
          type="text"
          label="Product Title"
          placeholder="Title"
          value={title}
          onChange={setTitle}
        />
        <div className="flex justify-between w-full ">
          <div className="w-1/2">
            <Input
              type="number"
              label="Product Cost in SOL"
              placeholder="Cost"
              value={cost}
              onChange={setCost}
            />
          </div>
          <div className="flex gap-5">
            <div className=" text-sm font-medium  text-white my-auto">
              Recieving wallet:{" "}
            </div>
            <div className="m-auto">
              <WalletMultiButton />
            </div>
          </div>
        </div>
        <Textarea
          label="Product Description"
          value={description}
          onChange={setDescription}
          placeholder="Description"
        />
        <MultiFilepnd
          src={imgUrl}
          setSrc={setImgUrl}
          label="Product Images (watermarked / for user's reference)"
        />

        <Attachment label="Product *" value={asset} onChange={setAsset} />
        <AlertWarning />

        <div className="mt-10 flex justify-center">
          <Button onClick={handleSubmit} style="w-1/2">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
