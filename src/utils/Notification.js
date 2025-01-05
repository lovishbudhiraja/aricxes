import React from "react";
import { IoMdClose } from "react-icons/io";

function Notification({ addClass, message, close }) {
  return (
    <div
      id="toast-simple"
      class={`flex items-center w-full p-4 space-x-4 rtl:space-x-reverse text-white -bg--base-color divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow mt-4 ${addClass}`}
      role="alert"
    >
      <svg
        class="w-5 h-5 text-white rotate-45"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
        />
      </svg>
      <div class="ps-4 text-base font-normal">{message}</div>
      <IoMdClose className="text-3xl pl-2 cursor-pointer" onClick={close} />
    </div>
  );
}

export default Notification;
