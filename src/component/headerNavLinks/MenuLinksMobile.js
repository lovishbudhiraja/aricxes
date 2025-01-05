import React, { useContext } from "react";
import ApiContext from "../../utils/DataContext";
import { NavLink } from "react-router-dom";

function MenuLinksMobile() {
  const { apiCall } = useContext(ApiContext);
  let menuLinks = apiCall[0].menuheaderNav.links;
  return (
    <>
      {menuLinks.map((menuItems) => {
        return (
          <li key={menuItems.id} className="group">
            <NavLink
              to={`/${menuItems.urlName}`}
              className="uppercase text-black relative block py-3 hover:-text--base-color"
            >
              {menuItems.name}
            </NavLink>
            {menuItems.sublinks.length > 0 ? (
              <div className="text-black w-full pl-2">
                <ul className="flex flex-col gap-2">
                  {menuItems.sublinks.map((subItems) => {
                    return (
                      <li className="list-none" key={subItems.id}>
                        <NavLink
                          to={`/${menuItems.urlName}`}
                          className="block text-xs hover:-text--base-color capitalize"
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

export default MenuLinksMobile;
