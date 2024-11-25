import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from "../../components/custom-components/ServiceCard";
import serviceCardData from "../../data/serviceCardData.json"; 

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        right: "-10px",
        transform: "translateY(-50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // width: "40px",
        // height: "40px",
        // backgroundColor: "#FCC215",
        // borderRadius: "50%",
        cursor: "pointer",
        zIndex: 2,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="black"
        strokeWidth={2}
        style={{ width: "20px", height: "20px" }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        left: "-10px",
        transform: "translateY(-50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // width: "40px",
        // height: "40px",
        // backgroundColor: "#FCC215",
        // borderRadius: "50%",
        cursor: "pointer",
        zIndex: 2,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="black"
        strokeWidth={2}
        style={{ width: "20px", height: "20px" }}
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
    <div className="relative m-2">
      <div className="mt-20">
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
