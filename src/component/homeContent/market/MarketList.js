import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import ApiContext from "../../../utils/DataContext";

function ServicesList() {
  const { apiCall } = useContext(ApiContext);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <FaArrowRight
        className="text-4xl text-black font-light absolute bottom-[-80px] top-[inherit] left-14 opacity-10 cursor-pointer"
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow({ onClick }) {
    return (
      <FaArrowLeft
        className="text-4xl text-black font-light absolute bottom-[-80px] top-[inherit] left-0 opacity-10 cursor-pointer"
        onClick={onClick}
      />
    );
  }
  return (
    <Slider {...settings}>
      {apiCall[0].marketweserve.industries.map((items) => {
        return (
          <li className="flex" key={items.id}>
            <a
              href="#_"
              className="flex flex-col group relative p-[44px] bg-white rounded-3xl max-w-[312px] ease-in duration-300 hover:-bg--title-color overflow-hidden h-[278px]"
            >
              <h3 className="text-2xl mb-1 font-bold group-hover:text-white ease-in duration-300">
                {items.sname}
              </h3>
              <p className="font-light group-hover:text-white ease-in duration-300">
                {items.desc}
              </p>
              <i className="absolute top-[-130px] right-[-130px] w-28 h-28 bg-gradient-to-r from-[#ED213A] to-[#93291E] flex items-center justify-center rounded-full ease-in duration-300 group-hover:top-[-20px] group-hover:right-[-20px]">
                <FaArrowRight
                  className="text-3xl text-white font-light"
                  bounce
                />
              </i>
            </a>
          </li>
        );
      })}
    </Slider>
  );
}

export default ServicesList;
