import React from 'react';
import './Service_section.css'; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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

  const data = [
    {
      name: "DRIVING",
      img: "src/assets/service_section/driver.png",
      img1:"src/assets/service_section/dri.png",
      description:"Our professional drivers prioritize your safety and punctuality. With expert navigation skills, they ensure a smooth and efficient journey. Trust us to get you to your destination comfortably and on time.",
    },
    {
      name: "CLEANING",
      img: "src/assets/service_section/cleaning.png",
      img1:"src/assets/service_section/cle.png",
      description:
        "Get your home or office sparkling clean with our expert cleaners. We ensure every corner shines, leaving a fresh, welcoming space. Trust us for a thorough and professional clean every time.",
    },
    {
      name: "COOKING",
      img: "src/assets/service_section/cooking.png",
      img1:"src/assets/service_section/coo.png",
      description:
        "Enjoy delicious meals prepared by skilled chefs in the comfort of your home. We bring gourmet flavors to your table, crafted with care and expertise. Let us handle the cooking while you savor every bite.",
    },
    {
      name: "PAINTING",
      img: "src/assets/service_section/painting.png",
      img1:"src/assets/service_section/pai.png",
      description:
        "Transform your home with high-quality painting services that elevate its look and feel. Our skilled painters ensure a flawless finish, tailored to your style. Trust us to bring vibrant, lasting colors to your space.",
    },
    {
      name: "REPAIRING",
      img: "src/assets/service_section/reparing.png",
      img1:"src/assets/service_section/rep.png",
      description:
        "Count on reliable home repair services for all your appliance and improvement needs. Our skilled technicians ensure timely, effective solutions for every project. Enjoy peace of mind with our trusted, high-quality repairs.",
    },
    {
      name: "PLUMBING",
      img: "src/assets/service_section/plumbing.png",
      img1:"src/assets/service_section/plu.png",
      description:
        "Get quick and efficient plumbing solutions to keep your home running smoothly. Our experienced plumbers handle every issue with precision and care. Rely on us for prompt, reliable service you can trust.",
    },
    {
      name: "BEAUTY",
      img: "src/assets/service_section/beauty.png",
      img1:"src/assets/service_section/bea.png",
      description:
        "Experience professional hair, makeup, and skincare treatments tailored to enhance your natural beauty. Our skilled specialists use top-quality products and techniques to give you a flawless look.",
    },
    {
      name: "ELDER CARE",
      img: "src/assets/service_section/elder.png",
      img1:"src/assets/service_section/eld.png",
      description:
        "Caring support for seniors in managing daily activities. Our compassionate caregivers assist with respect and patience, ensuring comfort and independence.",
    },
    {
      name: "CHILD CARE",
      img: "src/assets/service_section/child.png",
      img1:"src/assets/service_section/chi.png",
      description:
        "Trusted nannies dedicated to your child's safety and happiness. Our caregivers provide attentive, nurturing support in a secure environment.",
    },
  ];

  return (
    <div className="service-section-container m-10">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={index}
              className="bg-custom-yellow h-[343px] w-[316px] text-black rounded-[10px] shadow-lg flex flex-col items-center p-4"
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
