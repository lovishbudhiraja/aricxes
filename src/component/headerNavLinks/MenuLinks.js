import React, { useContext } from "react";
import ApiContext from "../../utils/DataContext";
import { NavLink } from "react-router-dom";

function MenuLinks() {
  const { apiCall } = useContext(ApiContext);
  let menuLinks = apiCall[0]?.menuheaderNav?.links;
  console.log(apiCall[0])
  return (
    <>
      {menuLinks.map((menuItems) => {
        return (
          <li
            key={menuItems.id}
            className={`relative group after:content-[''] after:absolute after:h-[3px] after:left-0 after:w-0 after:transition-all after:-bg--base-color after:bottom-[0px] hover:after:w-full py-6 cursor-pointer ${
              menuItems.sublinks.length > 0
                ? 'before:content-[""] before:absolute before:w-0 before:h-0 before:border-[5px] before:border-t-white before:border-transparent before:bottom-[10px] before:left-0 before:right-0 before:m-auto before:ease-linear before:duration-300 hover:before:rotate-180 hover:before:bottom-[15px]'
                : ""
            }`}
          >
            <NavLink
              to={`/${menuItems.urlName}`}
              className={`uppercase text-white relative`}
            >
              {menuItems.name}
            </NavLink>
            {menuItems.sublinks.length > 0 ? (
              <div className="absolute left-0 top-[90px] group-hover:top-[70px] opacity-0 invisible group-hover:visible group-hover:opacity-100 ease-linear duration-300 bg-white text-black p-4 rounded-xl min-w-[300px] z-[1]">
                <ul className="flex flex-col gap-3">
                  {menuItems.sublinks.map((subItems) => {
                    return (
                      <li className="list-none" key={subItems.id}>
                        <NavLink
                          to={`/services/${subItems.urlname}`}
                          className="block text-base hover:-text--base-color capitalize py-1"
                        >
                          {subItems.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              ""
            )}
          </li>
        );
      })}
    </>
  );
}

export default MenuLinks;
