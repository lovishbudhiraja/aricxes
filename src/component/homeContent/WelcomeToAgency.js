import React, { useContext } from "react";
import ApiContext from "../../utils/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
// import Buttons from "../../utils/Buttons";
function WelcomeToAgency() {
  const { apiCall } = useContext(ApiContext);
  return (
    <section className="bg-[url('https://res.cloudinary.com/dfvonhupq/image/upload/v1734030899/h2-bg-overlay1-1_1_zkab3c.png')] bg-cover">
      <div className="wrapper">
        <div className="w-[45%] flex items-center justify-center relative">
          <img src={apiCall[0].agencycontent.img} alt="" />
          <img
            src="https://res.cloudinary.com/dfvonhupq/image/upload/v1734019892/h1-shape-3_fevti6.png"
            className="absolute top-32 animate-[wiggle_2s_ease-in-out_infinite] left-2"
            alt="Chart"
          />
          <img
            src="https://res.cloudinary.com/dfvonhupq/image/upload/v1734019891/h1-shape-1-1_andbfx.png"
            className="absolute bottom-32 animate-[bounce_5s_infinite] right-2"
            alt="Chart"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-10">
          <h2 className="font-fira text-5xl leading-snug font-bold">
            {apiCall[0].welcomesection.heading}
          </h2>
          <ul className="flex flex-col gap-8 pl-3">
            {apiCall[0].welcomesection.headingopt.map((items) => {
              return (
                <li
                  className="flex gap-5 text-xl items-center relative"
                  key={items.id}
                >
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className="-text--base-color animate-ping absolute top-1 left-0"
                  />
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className="-text--base-color"
                  />
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
