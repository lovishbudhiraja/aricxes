import React from "react";

function Buttons({ classprop, textname }) {
  return (
    <a href="#_" className={classprop}>
      <span
        className={`absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56`}
      ></span>
      <span className="relative">{textname}</span>
    </a>
  );
}

export default Buttons;
