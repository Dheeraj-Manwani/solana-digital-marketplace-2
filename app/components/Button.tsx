import React from "react";
import { twMerge } from "tailwind-merge";

export const Button = ({
  children,
  onClick,
  style,
}: {
  children: React.ReactNode;
  onClick: () => void;
  style?: string;
}) => {
  return (
    <button
      type="button"
      className={twMerge(
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
        style ? style : ""
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
