"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./Button";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
// import {
//   WalletDisconnectButton,
//   WalletMultiButton,
// } from "@solana/wallet-adapter-react-ui";
// import { useWallet } from "@solana/wallet-adapter-react";

export const Appbar = () => {
  const session = useSession();
  const pathname = usePathname();
  //   const { publicKey } = useWallet();
  const isActive = (path: string | undefined) => path === pathname;

  return (
    <nav className=" bg-gray-900 fixed w-full z-20 top-0 start-0 border-b  border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse w-10"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            SolKart
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse w-10">
          {session.data?.user ? (
            <Button
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={() => {
                signIn("google");
              }}
            >
              Signin
            </Button>
          )}
          {/* <div className="text-xl pr-4 pb-2">
            publicKey ? <WalletDisconnectButton /> : <WalletMultiButton />}
          </div> */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <a
                href="/"
                className={twMerge(
                  "block py-2 px-3 text-white bg-blue-700 md:hover:text-blue-500 rounded md:bg-transparent  md:p-0",
                  isActive("/") ? "md:text-blue-500" : ""
                )}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/products"
                className={twMerge(
                  "block py-2 px-3 text-white bg-blue-700 md:hover:text-blue-500 rounded md:bg-transparent  md:p-0",
                  isActive("/products") ? "md:text-blue-500" : ""
                )}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={twMerge(
                  "block py-2 px-3 text-white bg-blue-700 md:hover:text-blue-500 rounded md:bg-transparent  md:p-0",
                  isActive("/contact") ? "md:text-blue-500" : ""
                )}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/seller"
                className={twMerge(
                  "block py-2 px-3 text-white bg-blue-700 md:hover:text-blue-500 rounded md:bg-transparent  md:p-0",
                  isActive("/seller/new") ? "md:text-blue-500" : ""
                )}
              >
                Sell
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
