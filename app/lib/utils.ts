// import { clsx, type ClassValue } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

export const checkValidImageExtension = (str: string) => {
  const STR = str.toUpperCase();
  return STR === "PNG" || STR === "JPG" || STR === "GIF" || STR === "JPEG";
};
