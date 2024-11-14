import { useState } from 'react'
import './App.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [count, setCount] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className="m-[50.5px]">
      <div className="mt-20 flex flex-wrap gap-6"> 
      <Slider {...settings}>
      
        {data.map((d) => (
          <div
           
            className="bg-custom-yellow h-[343px] w-[316px] text-black rounded-[10px] shadow-lg flex flex-col items-center p-4">
            <div className="flex justify-center items-center w-full h-[175px]">
              <img src={d.img} alt="" className="h-full w-full object-cover rounded-[10px]" />
            </div>
  
            <div className="flex flex-col justify-center items-center gap-2 p-2 text-center">
            <p className="text-[11px] font-regular m-0">{d.description}</p>
            <button className="bg-[#f2b02d] text-black text-[12.4px] h-[87px]w-[25px] px-6 py-1 rounded-xl mt-2">
                {d.name} </button>
            </div>
          </div>
        ))}
        </Slider>
      
      </div>
    </div>
  );
  
}

const data =[
    {
    name:`DRIVING`,
    img:`src/assets/service_section/driver.png`,
    description:`"Our professional drivers prioritize your safety and punctuality. With expert navigation skills, 
    they ensure a smooth and efficient journey. Trust us to get you to your destination comfortably and on time."`,
    },
    {
    name:`CLEANING`,
    img:`src/assets/service_section/cleaning.png`,
    description:`Get your home or office sparkling clean with our expert cleaners. 
    We ensure every corner shines, leaving a fresh, welcoming space. Trust us for a thorough and professional clean every time."`,
    }, 
    {
    name:`COOKING`,  
    img:`src/assets/service_section/cooking.png`,
    description:`"Enjoy delicious meals prepared by skilled chefs in the comfort of your home. 
    We bring gourmet flavors to your table, crafted with care and expertise. 
    Let us handle the cooking while you savor every bite."`,
    },
    {
    name:`PAINTING`,
    img:`src/assets/service_section/painting.png`,
    description:`"Transform your home with high-quality painting services that elevate its look and feel. 
    Our skilled painters ensure a flawless finish, tailored to your style. 
    Trust us to bring vibrant, lasting colors to your space."`,
    },
    {
    name:`REPARING`,
    img:`src/assets/service_section/reparing.png`,
    description:`"Count on reliable home repair services for all your appliance and improvement needs. 
    Our skilled technicians ensure timely, effective solutions for every project. 
    Enjoy peace of mind with our trusted, high-quality repairs."`,
    },
    {
    name:`PLUMBING`,
    img:`src/assets/service_section/plumbing.png`,
    description:`"Get quick and efficient plumbing solutions to keep your home running smoothly. 
    Our experienced plumbers handle every issue with precision and care. 
    Rely on us for prompt, reliable service you can trust."`,
    },
    {
    name:`BEAUTY`,
    img:`src/assets/service_section/beauty.png`,
    description:`"Experience professional hair, makeup, and skincare treatments tailored to enhance your natural beauty. 
    Our skilled specialists use top-quality products and techniques to give you a flawless look. 
    Trust us for a refreshing and luxurious beauty experience."`,
    },
    {
    name:`ELDER CARE`,
    img:`src/assets/service_section/elder.png`,
    description:`"Caring support for seniors in managing daily activities. 
    Our compassionate caregivers assist with respect and patience, ensuring comfort and independence. 
    Trust us to provide dedicated, attentive care every day."`,
    },
    {
    name:`CHILD CARE`,
    img:`src/assets/service_section/child.png`,
    description:`"Trusted nannies dedicated to your child's safety and happiness. 
    Our caregivers provide attentive, nurturing support in a secure environment. 
    Let us give you peace of mind with reliable, compassionate care."`,
    },
]

export default App
