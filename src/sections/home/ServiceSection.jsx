import React, { useEffect, useState } from "react";
import "./Service_section.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getServiceData } from "../../api/service";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`custom-arrow slick-next ${className}`}
      onClick={onClick}
    >
      &#10095;
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`custom-arrow slick-prev ${className}`}
      onClick={onClick}
    >
      &#10094;
    </div>
  );
}

const ServiceSection = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getServiceData();
      setServiceData(data);
    };
    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="service-section-container m-10">
      <div className="mt-20">
        <p className="heading-3"> our services </p>
        <Slider {...settings}>
          {serviceData.map((d, index) => (
            <div
              key={index}
              className="bg-yellow-400 h-[343px] w-[316px] text-black rounded-[10px] shadow-lg flex flex-col items-center p-4"
            >
              <div className="flex justify-center items-center w-full h-[175px]">
                <img
                  src={d.img}
                  alt={d.name}
                  className="h-full w-full object-cover rounded-[10px]"
                />
              </div>

              <div className="relative flex justify-start items-center mt-[-40px]">
                <div className="rounded-full">
                  <img
                    src={d.img1}
                    alt={`${d.name} Icon`}
                    className="w-[66px] h-[66px] object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center items-center gap-2 p-1 text-center">
                <p className="text-[11px] font-regular m-0">{d.description}</p>
                <button className="bg-[#f2b02d] text-black text-[12.4px] h-[25px] px-6 py-0 rounded-xl mt-2 ">
                  {d.name}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServiceSection;
