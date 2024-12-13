import React, { useContext, useEffect, useState } from "react";
import ApiContext from "../../utils/DataContext";
import MenuLinks from "./MenuLinks";
import Buttons from "../../utils/Buttons";

function Navbar() {
  const [headScroll, setHeadScroll] = useState(false);

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
          ? "flex items-center border-b-[1px] border-b-[#ffffff1a] fixed top-0 left-0 w-full z-10 hover:bg-[#ffffff1a] transition-all bg-black opacity-90"
          : "flex items-center border-b-[1px] border-b-[#ffffff1a] fixed top-0 left-0 w-full z-10 hover:bg-[#ffffff1a] transition-all"
      }
    >
      <div className="wrapper">
        <a href="/" className="p-6">
          <img className="w-32" src={apiCall[0].logocomp.url} alt="" />
        </a>
        <nav>
          <ul className="flex gap-7">
            <MenuLinks />
          </ul>
        </nav>
        <Buttons
          classprop={
            "relative inline-flex text-white items-center justify-center py-2 px-5 overflow-hidden txtColor hover:-text--base-color -bg--base-color rounded-full group"
          }
          textname={"Request a quote"}
        />
      </div>
    </header>
  );
}

export default Navbar;
