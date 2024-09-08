"use client";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./Button";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import logo from "@/public/sol-kart-logo.png";
import Image from "next/image";

export const Appbar = () => {
  const session = useSession();
  const pathname = usePathname();
  const isActive = (path: string | undefined) => path === pathname;
  const [menuExpand, setMenuExpand] = useState<boolean>(false);

  return (
    <nav className="fixed w-full z-20 top-0 start-0 border-b  border-gray-600 bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse w-25"
        >
          <Image src={logo} height={50} width={50} alt="Solkart logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            SolKart
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse w-25">
          <button
            type="button"
            className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            onClick={() => setMenuExpand(!menuExpand)}
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
        </div>
        <div
          className={`items-center justify-between ${
            menuExpand ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  border-gray-700 bg-black">
            <li>
              <a
                href="/"
                className={twMerge(
                  "block py-2 px-3 text-white  md:hover:text-blue-500 rounded md:bg-transparent  md:p-0",
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
                  "block py-2 px-3 text-white  md:hover:text-blue-500 rounded md:bg-transparent  md:p-0",
                  isActive("/products") ? "md:text-blue-500" : ""
                )}
              >
                Products
              </a>
            </li>
            {/* <li>
              <a
                href="/contact"
                className={twMerge(
                  "block py-2 px-3 text-white bg-blue-700 md:hover:text-blue-500 rounded md:bg-transparent  md:p-0",
                  isActive("/contact") ? "md:text-blue-500" : ""
                )}
              >
                Contact
              </a>
            </li> */}
            <li>
              <a
                href="/sell"
                className={twMerge(
                  "block py-2 px-3 text-white  md:hover:text-blue-500 rounded md:bg-transparent  md:p-0",
                  isActive("/sell/new") || isActive("/sell")
                    ? "md:text-blue-500"
                    : ""
                )}
              >
                Sell
              </a>
            </li>
          </ul>
        </div>

        {/* <div
          className={`items-center justify-between
           ${menuExpand ? "" : "hidden"} w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul
            className="flex flex-col font-medium m-auto p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:bg-white md:border-none"
            onClick={() => setMenuExpand(false)}
          >
            <li>
              <a
                href="/"
                className={twMerge(
                  "block py-2 px-3 text-white  md:hover:text-blue-500 rounded md:bg-transparent  md:p-0",
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
                  "block py-2 px-3 text-white  md:hover:text-blue-500 rounded md:bg-transparent  md:p-0",
                  isActive("/products") ? "md:text-blue-500" : ""
                )}
              >
                Products
              </a>
            </li>
       
            <li>
              <a
                href="/sell"
                className={twMerge(
                  "block py-2 px-3 text-white bg-blue-700 md:hover:text-blue-500 rounded md:bg-transparent  md:p-0",
                  isActive("/sell/new") || isActive("/sell")
                    ? "md:text-blue-500"
                    : ""
                )}
              >
                Sell
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};
