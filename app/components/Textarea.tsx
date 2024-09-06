import React from "react";

export const Textarea = ({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (str: string) => void;
  placeholder?: string;
}) => {
  return (
    <div>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium  text-white"
      >
        {label}
      </label>
      <textarea
        id="message"
        rows={4}
        className="block p-2.5 w-full text-sm rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  );
};
