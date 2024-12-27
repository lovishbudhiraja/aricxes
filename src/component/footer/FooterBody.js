import React, { useContext } from "react";
import ApiContext from "../../utils/DataContext";

function FooterBody() {
  const { apiCall } = useContext(ApiContext);
  let menuLinks = apiCall[0].menuheaderNav.links;
  return (
    <div className="flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between pb-10 gap-14">
      <div className="flex flex-col gap-5">
        <img className="w-32" src={apiCall[0].logocomp.url} alt="" />
        <p className="text-base text-white leading-7 font-light">
          {apiCall[0].footer.content}
        </p>
      </div>
      <div className="flex flex-col gap-5 w-1/2">
        <h4 className="text-2xl font-bold text-white">Services</h4>
        <ul className="flex flex-col gap-4">
          {menuLinks.map((menuItems) => {
            return (
              <li key={menuItems.id}>
                <a
                  href="/"
                  className="text-white text-base font-light relative ease-linear font-normal duration-300 after:content-[''] after:absolute after:h-[3px] after:left-0 after:w-0 after:transition-all after:-bg--base-color after:bottom-[-5px] hover:after:w-full hover:-text--base-color"
                >
                  {menuItems.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h4 className="text-2xl font-bold text-white">Our Markets</h4>
        <ul className="flex flex-wrap gap-4 gap-x-6">
          {apiCall[0].marketweserve.industries.map((items) => {
            return (
              <li className="w-full lg:w-[48%]" key={items.id}>
                <a
                  href="/"
                  className="text-white text-base font-light relative ease-linear font-normal duration-300 after:content-[''] after:absolute after:h-[3px] after:left-0 after:w-0 after:transition-all after:-bg--base-color after:bottom-[-5px] hover:after:w-full hover:-text--base-color"
                >
                  {items.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FooterBody;
