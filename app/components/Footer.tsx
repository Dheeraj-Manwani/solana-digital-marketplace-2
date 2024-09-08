import logo from "@/public/sol-kart-logo.png";
import Image from "next/image";
import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="sm:mt-14 border-t  border-gray-600">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://solkart.xyz" className="flex items-center">
              <Image
                src={logo}
                // className="h-8 me-3"
                alt="Solkart Logo"
                width={100}
                height={100}
              />
              <a
                className="self-center text-2xl font-semibold whitespace-nowrap text-white hover:underline"
                href="https://www.solkart.xyz"
              >
                SolKart.xyz
              </a>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Quick Links
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.solkart.xyz"
                    className="hover:underline"
                    target="blank"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.solkart.xyz/products"
                    className="hover:underline"
                  >
                    Products
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.solkart.xyz/products"
                    className="hover:underline"
                  >
                    Sell Asset
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow Me
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/Dheeraj-Manwani"
                    className="flex hover:underline "
                    target="blank"
                  >
                    <span className="mt-1.5 mr-1">
                      <BsGithub size={15} />
                    </span>
                    Github
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://x.com/dkManwani2000"
                    className="flex hover:underline"
                  >
                    <span className="mt-1.5 mr-1">
                      <BsTwitterX size={15} />
                    </span>
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/_dheeraj_manwani_"
                    className="flex hover:underline"
                    target="blank"
                  >
                    <span className="mt-1.5 mr-1">
                      <BsInstagram size={15} />
                    </span>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" /> */}
        <div className="sm:flex sm:items-center sm:justify-between my-6 sm:mx-auto  lg:my-8">
          <span className="text-sm sm:text-center text-gray-400">
            © 2024{" "}
            <a href="https://www.solkart.xyz" className="hover:underline">
              SolKart.xyz™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
