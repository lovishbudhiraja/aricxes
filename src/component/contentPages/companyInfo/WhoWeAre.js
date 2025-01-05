import React, { useState } from "react";
import { GlobalUrls } from "../../../utils/urls";
import { WiStars } from "react-icons/wi";

function WhoWeAre() {
  const [content, setContent] = useState(1);
  const handelClick = (index) => {
    setContent(index);
  };

  return (
    <section className="">
      <div className="wrapper overflow-visible items-start">
        <div className="flex relative lg:w-1/2 w-full">
          <img
            className=""
            src={`${GlobalUrls}v1735472175/about-us-info-pic1_w8xrgs.png`}
            alt="Who we are"
          />
          <div
            className="w-full lg:w-44 h-full lg:h-44 bg-gradient-to-r -from--base-color to-[#ed2169] lg:absolute top-44 right-32 lg:z-[1] rounded-tr-3xl flex justify-center 
          items-center flex-col gap-2 lg:animate-bounce"
          >
            <p className="text-lg lg:text-5xl text-white font-extrabold">10</p>
            <span className="text-base lg:text-2xl font-bold text-white text-center">
              Years of Experince
            </span>
          </div>
          <img
            className="hidden lg:block absolute bottom-7 -right-8 shadow-2xl rounded-3xl"
            src={`${GlobalUrls}v1735472175/about-us-info-2_jtnspw.png`}
            alt="Who we are"
          />
        </div>
        <div className="flex flex-col relative lg:w-1/3 w-full">
          <sub className="font-juliet text-xl text-orange-700 flex items-center gap-1">
            <WiStars /> Who we are
          </sub>
          <h2 className="font-fira text-3xl lg:text-5xl lg:leading-snug text-black font-bold">
            Empowering Brand Growth Together
          </h2>
          <p className="text-base text-black font-light">
            IT consulting and software development services. We have helped
            non-IT organizations and companies
          </p>

          <div className="flex flex-col gap-3 mt-5">
            <ul className="flex gap-3 border-b-[1px] border-b-black">
              <li
                className={`font-medium py-2 px-3 cursor-pointer ${
                  content === 1 ? "-text--base-color" : "text-black"
                }`}
                onClick={() => handelClick(1)}
              >
                Our Mission
              </li>
              <li
                className={`font-medium py-2 px-3 cursor-pointer ${
                  content === 2 ? "-text--base-color" : "text-black"
                }`}
                onClick={() => handelClick(2)}
              >
                How we work
              </li>
            </ul>
            <div>
              <p
                className={`text-base text-black font-light ${
                  content === 1 ? "block" : "hidden"
                }`}
              >
                IT consulting and software development services. We have helped
                non-IT organizations and companies
              </p>
              <p
                className={`text-base text-black font-light ${
                  content === 2 ? "block" : "hidden"
                }`}
              >
                IT consulting and software development services.
              </p>
            </div>
          </div>

          <div class="flex gap-3 items-center flex-1 mt-10">
            <span class="w-12 h-12 rounded-full -bg--base-color inline-flex items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                class="text-white text-xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1000.35 771.616c-15.664-11.008-187.059-124.974-208.066-137.806-9.152-5.6-20.32-8.336-32.464-8.336-15.664 0-33.008 4.56-49.935 13.472-16.497 8.688-66.464 37.12-90.913 51.088-21.536-15.12-72.127-53.872-151.84-133.664-79.215-79.184-118.319-130.191-133.535-151.84 13.936-24.432 42.336-74.4 50.976-90.848 16.368-31.008 18.225-61.968 4.944-82.848-12.463-19.68-125.968-191.808-137.68-208C240.813 7.554 221.021-.702 199.55-.702c-16.944 0-34.912 5.12-50.496 15.968C147.55 16.338-3.043 125.522-1.043 187.618 4.51 362.05 174.013 567.042 315.228 708.306s346.224 310.815 521.344 316.399h1.44c61.312 0 169.089-148.688 170.129-150.16 28.272-40.4 17.968-84.88-7.791-102.929zm-44.209 65.651c-40.592 56.224-98.225 114.945-120.784 123.346-120.032-5.632-288.464-111.12-474.88-297.568-186.4-186.464-291.872-354.704-297.44-474.336 8.096-22.624 66.815-80.624 122.527-120.912 4.128-2.848 9.216-4.496 13.968-4.496 1.055 0 1.935.096 2.624.224 18 26.16 114.624 172.433 132.16 199.776.064 2.88-.911 10.19-6.4 20.623-5.84 11.12-24.032 43.536-49.904 88.88l-20.128 35.28 23.344 33.248c17.408 24.72 58.816 78.464 140.624 160.288 82.16 82.192 135.712 123.473 160.336 140.784l33.248 23.344 35.28-20.16c34.193-19.537 75.504-42.945 88.945-50 10.784-5.68 18.16-6.129 20.16-6.129.32 0 .593 0 .816.033 24.496 15.376 173.937 114.592 200.32 132.688.432 2.56.031 8.128-4.816 15.088zM683.899 382.276l275.246-273.572-.88 155.056c-.288 12.944 9.968 24.192 22.912 23.889l16.416-.016c12.96-.32 23.649-8 23.921-20.928l.656-231.008c0-.223-.864-.383-.864-.607l1.264-11.712c.128-6.496-1.376-12.288-5.6-16.432-4.128-4.175-9.935-6.72-16.384-6.543L988.89.675c-.224 0-.4.096-.655.128L758.763-.222c-12.928.289-23.616 10.977-23.92 23.921l-.032 16.416c1.967 15.233 13.935 24.16 26.88 23.872l151.248.4L638.65 337.013c-12.497 12.496-12.497 32.768 0 45.264 12.496 12.481 32.752 12.481 45.248 0z"></path>
              </svg>
            </span>
            <p class="flex flex-col gap-1">
              <span class="text-font-14x text-black block">Call Anytime</span>
              <span class="text-xl font-semibold text-black block">
                +91-9650592248
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
