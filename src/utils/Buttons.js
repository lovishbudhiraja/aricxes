import React from "react";

function Buttons({ classprop, textname, iconName, clickedinfo }) {
  return (
    <button className={classprop} onClick={clickedinfo}>
      <span
        className={`absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-72 group-hover:h-72`}
      ></span>
      <span className="relative flex items-center gap-2">
        {textname} {iconName}
      </span>
    </button>
  );
}

export default Buttons;
