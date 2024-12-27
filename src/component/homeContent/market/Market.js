import React, { useContext } from "react";
import Buttons from "../../../utils/Buttons";
import ServicesList from "./MarketList";
import ApiContext from "../../../utils/DataContext";
import { WiStars } from "react-icons/wi";

function Services() {
  const { apiCall } = useContext(ApiContext);
  return (
    <section className="bg-[url('https://res.cloudinary.com/dfvonhupq/image/upload/v1734171628/h2-bg-section1_b78vde.jpg')] bg-cover">
      <div className="wrapper flex-wrap lg:flex-nowrap gap-6 lg:gap-0">
        <div className="w-full lg:w-[40%] flex flex-col">
          <sub className="font-juliet text-xl text-orange-700 flex items-center gap-1">
            <WiStars /> {apiCall[0].marketweserve.subheading}
          </sub>
          <h2 className="font-fira relative text-3xl lg:text-5xl leading-snug font-bold mb-10">
            {apiCall[0].marketweserve.heading}
          </h2>
          {/* <Buttons
            classprop={
              "relative mr-auto text-white inline-flex items-center justify-center py-5 text-base px-9 overflow-hidden txtColor hover:-text--base-color -bg--base-color rounded-full group min-w-[160px]"
            }
            textname={"View All Services"}
          /> */}
          <div className="w-full h-[500px] hidden lg:block overflow-hidden rounded-tl-[200px] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl ease-linear duration-300 hover:rounded-tl-2xl hover:rounded-br-[200px]">
            <img
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dfvonhupq/image/upload/v1734686072/photo-1734076459123-bf27d91650db_sscytr.jpg"
              alt="Markets We Serve"
            />
          </div>
        </div>
        <div className="w-full lg:w-[55%] flex flex-col gap-14 mb-12 relative">
          <div className="flex">
            <ul className="w-full">
              <ServicesList />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
