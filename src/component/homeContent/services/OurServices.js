import { CgArrowsExpandDownLeft } from "react-icons/cg";
import { useContext } from "react";
import ApiContext from "../../../utils/DataContext";
import { ServiceUrl } from "../../../utils/urls";
import { WiStars } from "react-icons/wi";

const Services = () => {
  const { apiCall } = useContext(ApiContext);
  return (
    <section className="bg-black">
      <div className="wrapper lg:justify-center flex-col">
        <sub className="font-juliet text-xl text-orange-700 flex items-center gap-1">
          <WiStars /> Feature Services
        </sub>
        <h2 className="font-fira text-3xl lg:text-5xl leading-snug text-white font-bold text-center">
          {apiCall[0].services.heading}
        </h2>
        <ul className="mt-10 flex justify-between w-full flex-wrap gap-0">
          {apiCall[0].services.oursevices.map((items, i) => {
            return (
              <li className="w-full lg:w-[45%] relative" key={items.id}>
                <a
                  href="#_"
                  className="group py-7 px-2 h-auto lg:h-[160px] flex gap-10 items-center text-base border-b border-b-2 border-b-[#1f1f1f] relative after:-bg--base-color after:w-0 after:h-[2px] after:absolute after:right-0 after:bottom-[-2px] transition-all hover:after:w-full after:ease-in after:duration-300"
                >
                  <span className="text-[#575757] font-bold relative z-[5] transition-all group-hover:text-white">
                    0{i + 1}
                  </span>
                  <div className="font-fira text-xl lg:text-3xl w-[70%] leading-snug text-white ease-in duration-300 font-bold relative z-[5] group-hover:-text--base-color">
                    {items.name}
                  </div>
                  <CgArrowsExpandDownLeft className="absolute hidden lg:block top-0 bottom-0 my-auto right-8 opacity-0 -text--base-color text-4xl rotate-180 group-hover:opacity-100 group-hover:right-10 ease-linear duration-300 hover:rotate-[225deg] z-10" />
                  <span className="absolute bottom-0 left-0 w-full h-0 ease-in duration-200 overflow-hidden opacity-15 group-hover:h-full">
                    <img
                      className="w-full sepia object-cover h-full"
                      src={`${ServiceUrl}${items.burl}`}
                      alt={items.name}
                    />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
