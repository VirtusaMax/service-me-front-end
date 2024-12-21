import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import background from '../../assets/register_section/backlogo.png';
import profileData from "../../data/profileData.json";

const Register = () => {
  return (
    <div className="relative isolate overflow-hidden bg-custom-blue py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-custom-yellow py-8">
            Meet the Best Service Providers
          </h2>
          <p className="text-base sm:text-lg font-medium text-custom-white leading-relaxed">
            Register with us today, start doing jobs, and get paid. Our trusted service providers are ready to assist you.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-custom-yellow text-custom-blue font-semibold text-sm sm:text-base rounded-lg shadow-lg hover:bg-custom-white hover:text-custom-blue transition duration-300 ease-in-out"
            >
              REGISTER NOW
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <Swiper
            modules={[EffectCoverflow, Pagination]}
            effect="coverflow"
            centeredSlides={true}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 2, spaceBetween: 30 },
            }}
            loop={true}
            coverflowEffect={{
              rotate: 30,
              stretch: 10,
              depth: 150,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            grabCursor={true}
            className="w-full mx-auto"
          >
            {profileData.map((profile, index) => (
              <SwiperSlide key={index} className="text-center">
                <div className="relative mt-6 mb-12 bg-custom-yellow border border-custom-blue rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105">
                  {/* Responsive Image */}
                  <img
                    src={profile.img}
                    alt={profile.name}
                    className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-custom-blue">{profile.name}</h3>
                    <button
                      className="mt-4 px-6 py-2 bg-custom-blue text-custom-yellow font-medium rounded-md hover:bg-custom-white hover:text-custom-blue transition duration-300"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Background Image */}
      <img
        alt="background"
        src={background}
        className="absolute inset-0 -z-10 opacity-5 h-full w-full object-cover"
      />
    </div>
  );
};

export default Register;
