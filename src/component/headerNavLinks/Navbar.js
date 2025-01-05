import React, { useContext, useEffect, useState } from "react";
import ApiContext from "../../utils/DataContext";
import MenuLinks from "./MenuLinks";
import Buttons from "../../utils/Buttons";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import MenuLinksMobile from "./MenuLinksMobile";

function NavBar() {
  const [headScroll, setHeadScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleClick() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  useEffect(() => {
    const scrollHead = () => {
      if (window.scrollY > 50) {
        setHeadScroll(true);
      } else {
        setHeadScroll(false);
      }
    };
    window.addEventListener("scroll", scrollHead);

    return () => {
      window.removeEventListener("scroll", scrollHead);
    };
  }, []);

  const { apiCall } = useContext(ApiContext);
  // console.log(apiCall[0].logocomp.url);
  if (apiCall && apiCall.length > 1) {
    return <>{JSON.stringify(apiCall.data)}</>;
  }

  return (
    <header
      className={
        headScroll
          ? "flex items-center border-b-[1px] border-b-[#ffffff1a] fixed top-0 left-0 w-full z-10 hover:bg-[#000000ed] transition-all bg-black opacity-100 lg:opacity-90"
          : "flex items-center border-b-[1px] border-b-[#ffffff1a] fixed top-0 left-0 w-full z-10 hover:bg-[#ffffff1a] transition-all"
      }
    >
      <div className="wrapper overflow-visible">
        <a href="/" className="p-6">
          <img className="w-32" src={apiCall[0].logocomp.url} alt="" />
        </a>
        <nav className="hidden lg:block">
          <ul className="flex gap-7">
            <MenuLinks />
          </ul>
        </nav>
        <Buttons
          classprop={
            "relative inline-flex text-white items-center justify-center py-2 px-5 overflow-hidden txtColor hover:-text--base-color -bg--base-color rounded-full group hidden lg:inline-flex"
          }
          textname={"Request a quote"}
        />
        <button
          className={`inline-flex lg:hidden items-center justify-center rounded-md p-2.5 text-gray-700 ${
            isOpen ? "z-10" : ""
          }`}
          onClick={toggleClick}
        >
          {isOpen ? (
            <IoMdClose className="text-black text-3xl" />
          ) : (
            <IoMenu className="text-white text-3xl" />
          )}
        </button>
        <div
          className={`flex gap-5 z-[9] lg:hidden absolute right-0 top-0 h-screen bg-white ease-out duration-300 box-border flex-col ${
            isOpen ? "w-52 sm:w-1/3 " : "w-0"
          }`}
        >
          <ul className="p-5">
            <MenuLinksMobile />
          </ul>
          <Buttons
            classprop={
              "absolute bottom-0 left-0 w-full text-base inline-flex text-white items-center justify-center py-4 px-5 overflow-hidden txtColor -bg--base-color"
            }
            textname={"Request a quote"}
          />
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black/85 ${
            isOpen ? "flex" : "hidden"
          }`}
        ></div>
      </div>
    </header>
  );
}

export default NavBar;
