import React from "react";
import { WiStars } from "react-icons/wi";

function OurTeam() {
  return (
    <section className="bg-black">
      <div className="wrapper lg:justify-center flex-col">
        <sub className="font-juliet text-xl text-orange-700 flex items-center gap-1">
          <WiStars /> Our Team Member
        </sub>
        <h2 className="font-fira text-3xl lg:text-5xl lg:leading-snug text-white font-bold text-center">
          Our team provide the best service
        </h2>
        <ul className="w-full flex flex-wrap justify-between mt-10">
          <li className="flex flex-col gap-2 items-center justify-center">
            <span className="w-[250px] h-[250px] rounded-full bg-white"></span>
            <p className="flex flex-col items-center justify-center gap-1 text-3xl font-bold text-white">
              Lovish Budhiraja
              <span className="text-xl font-extralight text-white/70">
                Fullstack Developer
              </span>
            </p>
          </li>
          <li className="flex flex-col gap-2 items-center justify-center">
            <span className="w-[250px] h-[250px] rounded-full bg-white"></span>
            <p className="flex flex-col items-center justify-center gap-1 text-3xl font-bold text-white">
              Sunil Kumar
              <span className="text-xl font-extralight text-white/70">
                product Designer
              </span>
            </p>
          </li>
          <li className="flex flex-col gap-2 items-center justify-center">
            <span className="w-[250px] h-[250px] rounded-full bg-white"></span>
            <p className="flex flex-col items-center justify-center gap-1 text-3xl font-bold text-white">
              Awadh Kataria
              <span className="text-xl font-extralight text-white/70">
                Marketing Head
              </span>
            </p>
          </li>
          <li className="flex flex-col gap-2 items-center justify-center">
            <span className="w-[250px] h-[250px] rounded-full bg-white"></span>
            <p className="flex flex-col items-center justify-center gap-1 text-3xl font-bold text-white">
              Vidushi
              <span className="text-xl font-extralight text-white/70">
                HR Head
              </span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default OurTeam;
