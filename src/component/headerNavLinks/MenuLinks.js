import React, { useContext } from "react";
import ApiContext from "../../utils/DataContext";

function MenuLinks() {
  const { apiCall } = useContext(ApiContext);
  let menuLinks = apiCall[0].menuheaderNav.links;
  return (
    <>
      {menuLinks.map((menuItems) => {
        return (
          <li key={menuItems.id}>
            <a
              href="/"
              className="uppercase text-white relative after:content-[''] after:absolute after:h-[3px] after:left-0 after:w-0 after:transition-all after:-bg--base-color after:bottom-[-5px] hover:after:w-full"
            >
              {menuItems.name}
            </a>
          </li>
        );
      })}
    </>
  );
}

export default MenuLinks;
