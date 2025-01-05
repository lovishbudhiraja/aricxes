import React, { useContext } from "react";
import ApiContext from "../../utils/DataContext";
import { WiStars } from "react-icons/wi";
import { FaArrowCircleRight } from "react-icons/fa";

// import Buttons from "../../utils/Buttons";
function WelcomeToAgency() {
  const { apiCall } = useContext(ApiContext);
  return (
    <section>
      <div className="wrapper flex-col-reverse md:flex-row gap-12 md:gap-0">
        <div className="w-full md:w-[45%] flex items-center justify-center relative">
          <img src={apiCall[0].agencycontent.img} alt="" />
          <img
            src="https://res.cloudinary.com/dfvonhupq/image/upload/v1734019892/h1-shape-3_fevti6.png"
            className="absolute top-32 animate-[wiggle_2s_ease-in-out_infinite] left-2 hidden md:block"
            alt="Chart"
          />
          <img
            src="https://res.cloudinary.com/dfvonhupq/image/upload/v1734019891/h1-shape-1-1_andbfx.png"
            className="absolute bottom-32 animate-[bounce_5s_infinite] right-2 hidden md:block"
            alt="Chart"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <sub className="font-juliet text-xl text-orange-700 flex items-center gap-1">
            <WiStars /> We Build Your Brand
          </sub>
          <h2 className="font-fira text-3xl md:text-5xl md:leading-snug font-bold mb-10">
            {apiCall[0].welcomesection.heading}
          </h2>
          <ul className="flex flex-col gap-3 md:gap-8 pl-3">
            {apiCall[0].welcomesection.headingopt.map((items) => {
              return (
                <li
                  className="flex gap-5 text-xl items-center relative"
                  key={items.id}
                >
                  <FaArrowCircleRight className="-text--base-color animate-ping absolute top-1 left-0 bottom-0 m-auto" />
                  <FaArrowCircleRight className="-text--base-color" />

                  {items.name}
                </li>
              );
            })}
          </ul>
          {/* <Buttons
            classprop={
              "relative mr-auto text-white inline-flex items-center justify-center py-5 text-base px-9 overflow-hidden txtColor hover:-text--base-color -bg--base-color rounded-full group min-w-[160px]"
            }
            textname={"View All Services"}
          /> */}
        </div>
      </div>
    </section>
  );
}

export default WelcomeToAgency;
