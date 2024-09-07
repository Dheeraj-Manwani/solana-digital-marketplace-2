"use client";

import {
  getProductById,
  sendAssetMail,
  verifyTransactionSignature,
} from "@/actions/index";
import { FullProduct } from "@/app/components/FullProduct";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { PublicKey, Transaction, SystemProgram } from "@solana/web3.js";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { useSession } from "next-auth/react";
import { AUTH } from "@/app/lib/data";

export default function Products({
  params,
}: {
  params: { productId: string };
}) {
  const router = useRouter();
  const session = useSession();
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const [product, setProduct] = useState({
    id: 0,
    title: "",
    cost: 0,
    description: "",
    images: [""],
    sellerId: 0,
    sellerPublicKey: "",
  });

  const handleBuy = async () => {
    if (session.status !== AUTH.AUTHENTICATED || !session.data?.user?.email) {
      toast.error("Log in first to buy a product");
    }
    if (product.sellerId === 0 || !product.sellerPublicKey) {
      toast.error("Cannot buy the product, seller's key is not present");
      return;
    }

    if (!publicKey) {
      toast.warning("Connect your wallet before proceeding");
      return;
    }

    if (publicKey.toString() === product.sellerPublicKey) {
      toast.error("Seller and buyer address is same");
      return;
    }

    const toastId = toast.loading("Processing Transaction...");
    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(product.sellerPublicKey),
          lamports: product.cost,
        })
      );

      const {
        context: { slot: minContextSlot },
        value: { blockhash, lastValidBlockHeight },
      } = await connection.getLatestBlockhashAndContext();

      const signature = await sendTransaction(transaction, connection, {
        minContextSlot,
      });

      await connection.confirmTransaction({
        blockhash,
        lastValidBlockHeight,
        signature,
      });

      const verify = await verifyTransactionSignature(signature);
      toast.success("Transaction Successfull!", { id: toastId });

      if (verify) {
        await sendAssetMail(
          product.sellerId,
          product.id,
          // @ts-expect-error aaaaaaaaaaaaaa
          session.data?.user.uid
        );
        router.push("/success");
      } else {
        toast.error("Sorry, We were'nt able to verify the transaction");
      }
    } catch (e) {
      console.log(e);
      toast.error("Transaction Failed", { id: toastId });
    }
    // setTxSignature(signature);
  };

  useEffect(() => {
    getProductById(Number(params.productId)).then((data) => {
      if (data) {
        setProduct({
          id: data.id,
          title: data.title,
          description: data.description ? data.description : "",
          cost: data.cost,
          images: data.images.map((img) => img.imageUrl),
          sellerId: data.seller.id,
          sellerPublicKey: data.payTo || "",
        });
      }
    });
  }, []);

  return (
    <section className=" bg-gray-900 pt-10 pb-56  w-full ">
      <FullProduct
        id={product.id}
        title={product.title}
        description={product.description}
        cost={product.cost}
        images={product.images}
        handleBuy={handleBuy}
      />
    </section>
  );
}
