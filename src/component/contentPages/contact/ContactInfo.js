import React from "react";
import Buttons from "../../../utils/Buttons";
import { TbMailForward } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

function ContactInfo() {
  function callUs() {
    window.location = "tel:+91-9650592248";
  }
  function locateUs() {
    window.location = "https://maps.app.goo.gl/1dvYm5sJ7ZXeiKFU6";
  }
  function mailUs() {
    window.location = "mailto:aricxesassist@gmail.com";
  }
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full">
      <div className="flex -bg--base-color/10 w-full p-6 rounded-2xl">
        <div className="bg-white rounded-2xl p-5 flex flex-col w-full">
          <div className="">
            <Buttons
              classprop={
                "relative mr-auto text-white inline-flex items-center justify-center py-3 text-base px-5 overflow-hidden txtColor hover:-text--base-color -bg--base-color rounded-full group min-w-[160px]"
              }
              textname={"Email Us"}
              clickedinfo={mailUs}
            />
          </div>
          <hr className="my-6" />
          <div className="flex gap-4">
            <a href="mailto:aricxesassist@gmail.com">
              <TbMailForward className="text-3xl font-light -text--base-color" />
            </a>
            <div className="flex flex-col">
              <p className="text-xl -text--title-color mb-2">Email Address</p>
              <span className="block text-base sm:text-lg font-light -text--title-color/55">
                Support@aricxes.com
              </span>
              <span className="block text-base sm:text-lg font-light -text--title-color/55">
                aricxesassist@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex -bg--base-color/10 w-full p-6 rounded-2xl">
        <div className="bg-white rounded-2xl p-5 flex flex-col w-full">
          <div className="">
            <Buttons
              classprop={
                "relative mr-auto text-white inline-flex items-center justify-center py-3 text-base px-5 overflow-hidden txtColor hover:-text--base-color -bg--base-color rounded-full group min-w-[160px]"
              }
              textname={"Call us"}
              clickedinfo={callUs}
            />
          </div>
          <hr className="my-6" />
          <div className="flex gap-4">
            <a href="tel:+91-9650592248">
              <FiPhoneCall className="text-3xl font-light -text--base-color" />
            </a>
            <div className="flex flex-col">
              <p className="text-xl -text--title-color mb-2">Phone Number</p>
              <span className="block text-base sm:text-lg font-light -text--title-color/55">
                +91-9650592248
              </span>
              <span className="block text-base sm:text-lg font-light -text--title-color/55">
                +91-9811521585
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex -bg--base-color/10 w-full p-6 rounded-2xl">
        <div className="bg-white rounded-2xl p-5 flex flex-col w-full">
          <div className="">
            <Buttons
              classprop={
                "relative mr-auto text-white inline-flex items-center justify-center py-3 text-base px-5 overflow-hidden txtColor hover:-text--base-color -bg--base-color rounded-full group min-w-[160px]"
              }
              textname={"Locate Us"}
              clickedinfo={locateUs}
            />
          </div>
          <hr className="my-6" />
          <div className="flex gap-4">
            <a
              href="https://maps.app.goo.gl/1dvYm5sJ7ZXeiKFU6"
              target="_blank"
              rel="noreferrer"
            >
              <GrLocation className="text-3xl font-light -text--base-color" />
            </a>
            <div className="flex flex-col">
              <p className="text-xl -text--title-color mb-2">Office Address</p>
              <span className="block text-base sm:text-lg font-light -text--title-color/55">
                A-299 Majlis Park, Adarsh Nagar, Delhi-110033, INDIA
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
