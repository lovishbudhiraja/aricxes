import React, { useContext } from "react";
import Buttons from "../../utils/Buttons";
import ServicesList from "./ServicesList";
import ApiContext from "../../utils/DataContext";

function Services() {
  const { apiCall } = useContext(ApiContext);
  return (
    <section className="bg-[url('https://res.cloudinary.com/dfvonhupq/image/upload/v1734030338/h2-bg-overlay1-1_qirpwu.png')] bg-cover">
      <div className="wrapper">
        <div className="w-[40%] flex flex-col gap-6">
          <h2 className="font-fira relative text-5xl leading-snug font-bold">
            {apiCall[0].services.heading}
          </h2>
          <p className="font-light relative">
            {apiCall[0].services.subheading}
          </p>
          <Buttons
            classprop={
              "relative mr-auto text-white inline-flex items-center justify-center py-5 text-base px-9 overflow-hidden txtColor hover:-text--base-color -bg--base-color rounded-full group min-w-[160px]"
            }
            textname={"View All Services"}
          />
        </div>
        <div className="w-[55%] flex flex-col gap-14 mb-12 relative">
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
