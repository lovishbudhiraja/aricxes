import React, { useContext } from "react";
import ApiContext from "../../utils/DataContext";

function MenuLinksMobile() {
  const { apiCall } = useContext(ApiContext);
  let menuLinks = apiCall[0].menuheaderNav.links;
  return (
    <>
      {menuLinks.map((menuItems) => {
        return (
          <li key={menuItems.id}>
            <a href="/" className="uppercase text-black relative block py-3 hover:-text--base-color">
              {menuItems.name}
            </a>
          </li>
        );
      })}
    </>
  );
}

export default MenuLinksMobile;
