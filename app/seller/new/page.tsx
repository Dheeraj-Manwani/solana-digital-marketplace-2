"use client";

import React, { useState } from "react";
import { Textarea } from "@/app/components/Textarea";
import { Input } from "@/app/components/Input";
import { MultiFilepnd } from "@/app/components/MultiFilepond";
import { Button } from "@/app/components/Button";
import { saveProduct } from "@/actions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Product } from "@/app/lib/zod";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import { useWallet } from "@solana/wallet-adapter-react";
// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function NewProduct() {
  const session = useSession();
  const router = useRouter();
  // const { publicKey, signMessage } = useWallet();

  const [imgUrl, setImgUrl] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    // if (!publicKey) {
    //   toast.error("Please connect a wallet for payment");
    //   return;
    // }

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

    // const message = new TextEncoder().encode(
    //   "Sign in to project made by Dheeraj for Solana 100xdevs hackathon?"
    // );
    // const signature = await signMessage?.(message);

    if (session.data) {
      const toastId = toast.loading("Submitting Product...");
      const { success, message } = await saveProduct(
        // @ts-expect-error aaaaaaaaaaaaaaaaaaaaa
        // aaaaaaaaaaaaaaaaaaa
        session.data.user.uid,
        title,
        description,
        Number(cost),
        imgUrl
        // publicKey.toString(),
        // signature
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
          value={title}
          onChange={setTitle}
        />
        <Input
          type="number"
          label="Product Cost in SOL"
          value={cost}
          onChange={setCost}
        />
        <Textarea
          label="Product Description"
          value={description}
          onChange={setDescription}
          placeholder="asacav"
        />
        <MultiFilepnd src={imgUrl} setSrc={setImgUrl} label="Product Images" />
        {/* {session.data?.user?.publicKey ? (
          <div className="block my-4 text-sm font-medium  text-white">
            Public key for payment : {session.data?.user.publicKey}
          </div>
        ) : (
          <></>
        )} */}
        <div className="flex gap-5 my-8">
          <div className=" text-sm font-medium  text-white my-auto">
            Wallet for payment:{" "}
          </div>
          <WalletMultiButton />
        </div>
        <div className="mt-10 flex justify-center">
          <Button onClick={handleSubmit} style="w-1/2">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
