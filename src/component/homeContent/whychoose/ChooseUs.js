import React, { useContext } from "react";
import { WiStars } from "react-icons/wi";
import ApiContext from "../../../utils/DataContext";
import Buttons from "../../../utils/Buttons";

function ChooseUs() {
  const { apiCall } = useContext(ApiContext);
  return (
    <section>
      <div className="wrapper justify-center items-center flex-col">
        <sub className="font-juliet text-xl text-orange-700 flex items-center gap-1">
          <WiStars /> Reasons to Choose Us
        </sub>
        <h2 className="font-fira text-3xl lg:text-5xl leading-snug text-black font-bold text-center mb-10">
          Why choose ARICXES?
        </h2>
        <ul className="flex flex-wrap lg:flex-nowrap gap-4 mb-10 justify-center">
          {apiCall[0].chooseus.reasons.map((items) => {
            return (
              <li className="flex" key={items.id}>
                <a
                  href="#_"
                  className="group relative p-[44px] bg-white rounded-3xl max-w-[312px] ease-in duration-300 hover:-bg--title-color overflow-hidden shadow-2xl shadow-orange-300/30"
                >
                  <h3 className="text-2xl mb-1 font-bold group-hover:text-white ease-in duration-300">
                    {items.name}
                  </h3>
                  <p className="font-light group-hover:text-white ease-in duration-300">
                    {items.desc}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
        <Buttons
          classprop={
            "relative text-white inline-flex items-center justify-center py-2 text-base px-5 overflow-hidden txtColor hover:-text--base-color -bg--base-color rounded-full group min-w-[160px]"
          }
          textname={"Let's Talk"}
        />
      </div>
    </section>
  );
}

export default ChooseUs;
