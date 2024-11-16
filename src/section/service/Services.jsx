import React from "react"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from "../../components/custom-components/ServiceCard"; 
import serviceCardData from "../../data/serviceCardData.json"; // Import the JSON data

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
    <div className="m-2">
      <div className="mt-20">
        <p className="heading-3"> our services </p>
        <Slider {...settings}>
          {serviceCardData.map((d, index) => (
            <div className="grid gird-col-3 xl:grid-cols-5">
              <ServiceCard
              key={index}
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
