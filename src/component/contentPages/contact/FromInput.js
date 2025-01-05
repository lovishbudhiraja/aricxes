import React from "react";

function FromInput({ placeholder, type, req, name, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <input
        className="bg-white rounded-full h-9 sm:h-14 py-2 px-8 text-lg font-light -text--title-color/55 shadow-sm focus:outline-[#999]"
        placeholder={placeholder}
        type={type}
        name={name}
        required={req}
        value={value}
        onChange={onChange}
      />
      <span className="text-red-600 hidden">This is error</span>
    </div>
  );
}

export default FromInput;
