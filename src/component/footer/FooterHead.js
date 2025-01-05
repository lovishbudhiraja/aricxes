import { SlCallOut } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import Buttons from "../../utils/Buttons";
import { useContext } from "react";
import ApiContext from "../../utils/DataContext";

function FooterHead() {
  const { apiCall } = useContext(ApiContext);
  return (
    <div className="flex flex-wrap flex-col lg:flex-row gap-6 lg:flex-nowrap justify-between items-center border-b-[1px] border-b-[#ffffff38] pb-10 mb-10">
      <div className="flex gap-3 items-center flex-1">
        <span className="w-12 h-12 rounded-full bg-white inline-flex items-center justify-center">
          <SlCallOut className="-text--base-color text-xl" />
        </span>
        <p className="flex flex-col gap-1">
          <span className="text-font-14x text-white block">Call Us on:</span>
          <span className="text-xl font-semibold text-white block">
            {apiCall[0].footer.phonenumber}
          </span>
        </p>
      </div>
      <div className="flex gap-8 flex-1">
        <a
          className="text-white ease-in duration-300 hover:-text--base-color text-xl"
          href="#-"
        >
          <FaFacebook />
        </a>
        <a
          className="text-white ease-in duration-300 hover:-text--base-color text-xl"
          href="#-"
        >
          <FaInstagram />
        </a>
        <a
          className="text-white ease-in duration-300 hover:-text--base-color text-xl"
          href="#-"
        >
          <FiLinkedin />
        </a>
        <a
          className="text-white ease-in duration-300 hover:-text--base-color text-xl"
          href="#-"
        >
          <FaXTwitter />
        </a>
      </div>
      <div className="flex gap-3 relative flex-1 w-full lg:w-auto">
        <input
          className="h-14 text-white bg-[#2c2c2c] rounded-full px-8 w-full"
          type="email"
          defaultValue="Join Us"
        />
        <Buttons
          classprop={
            "text-white inline-flex items-center justify-center h-14 text-base px-12 overflow-hidden txtColor hover:-text--base-color -bg--base-color rounded-full group absolute top-0 right-0"
          }
          textname={"Send"}
        />
      </div>
    </div>
  );
}

export default FooterHead;
