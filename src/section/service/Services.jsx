import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from "../../components/custom-components/ServiceCard";
import serviceCardData from "../../data/serviceCardData.json"; 
import "../../index.css";
import StandardLayout from "../../components/layout/StandardLayout";



function NextArrow(props) {
  const { onClick } = props;
  return (
    <StandardLayout>
    <div  className="slick-arrow -right-8"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="black"
        strokeWidth={2}
        style={{ width: "30px", height: "30px"  }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
    </StandardLayout>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow -left-4"
      onClick={onClick}
      
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="black"
        strokeWidth={2}
        style={{ width: "30px", height: "30px" }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
}

const Services = () => {
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
    <div className="relative m-2 p-8">
      <div className="mt-20 m-2">
        <p
          style={{
            fontSize: "36px", 
            fontWeight: "bold", 
            color: "#FCC215",
            textAlign: "left", 
            marginBottom: "20px", 
          }}
        >
          our services
        </p>
        <Slider {...settings}>
          {serviceCardData.map((d, index) => (
            <div key={index}>
              <ServiceCard
                name={d.name}
                img={d.img}
                img1={d.img1}
                description={d.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
