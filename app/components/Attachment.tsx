import { twMerge } from "tailwind-merge";
import { Icon } from "./Icon";

export const Attachment = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: File | null;
  onChange: (file: File | null) => void;
}) => {
  return (
    <div className="mb-6">
      <label className="block mb-3 mt-8 text-sm font-medium  text-white">
        {label}
      </label>
      {!value && (
        <>
          <label
            htmlFor="product"
            className={twMerge(
              "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            )}
          >
            Upload
          </label>

          <input
            type={"file"}
            id="product"
            className={twMerge(
              "border text-sm rounded-lg  w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 hidden"
            )}
            required
            // value={value}
            onChange={(e) => {
              console.log(e.target.files);
              onChange(e.target.files ? e.target.files[0] : null);
            }}
          />
        </>
      )}
      {value && (
        <div className="flex gap-2">
          <div>
            {value.name.length > 25
              ? value.name.substring(0, 25) + "..."
              : value.name}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              onChange(null);
            }}
          >
            <Icon type="cross" style="size-4 rounded-[50%] cursor-pointer" />
          </button>
        </div>
      )}
    </div>
  );
};
