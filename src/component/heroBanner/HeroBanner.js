import React, { useContext } from "react";
import ApiContext from "../../utils/DataContext";
import Buttons from "../../utils/Buttons";
import { GlobalUrls } from "../../utils/urls";
import { NavLink } from "react-router-dom";

function HeroBanner() {
  const { apiCall } = useContext(ApiContext);
  if (apiCall && apiCall.length > 1) {
    return <>{JSON.stringify(apiCall.data)}</>;
  }

  return (
    <div className="h-auto lg:h-screen pt-28 pb-20 lg:pb-0 bg-[url('https://res.cloudinary.com/dfvonhupq/image/upload/v1733925050/h2-bg-slider_mw5qab.jpg')] bg-cover">
      <div className="wrapper relative h-full justify-between flex-col lg:flex-row">
        <img
          src={`${GlobalUrls}v1734339872/home4-slide1-additional_ludzcj.png`}
          alt=""
          className="w-[46%] saturate-0 hidden lg:flex"
        />
        <div className="flex shrink-0 flex-col w-[100%] gap-6 lg:w-2/4">
          <h1
            className="text-3xl lg:text-5xl text-white font-fira lg:leading-snug font-bold"
            id="head"
          >
            {apiCall[0].Bannercontent.heading
              .split("Customer Experience")
              .map((part, index) =>
                index % 2 === 0 ? (
                  part
                ) : (
                  <span className="-text--base-color" key={index}>
                    Customer Experience
                  </span>
                )
              )}{" "}
            {apiCall[0].Bannercontent.heading.split(" ").slice(5).join(" ")}
          </h1>
          <p className="text-xl text-white leading-snug font-light">
            {apiCall[0].Bannercontent.subcontent}
          </p>

          <NavLink to={`/${apiCall[0].menuheaderNav.links[4].urlName}`}>
            <Buttons
              classprop={
                "relative mr-auto text-white inline-flex items-center justify-center py-2 px-5 overflow-hidden txtColor hover:-text--base-color -bg--base-color rounded-full group min-w-[160px]"
              }
              textname={"Let's talk"}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
