import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import background from '../../assets/register_section/backlogo.png';

const profiles = [
  {
    name: 'Alex B.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRU68AVwhBfw6sjuntzSy2sDEgBh8Aff69qBRgYumT-Kpwp-IRPOXboKdpN45yi85gPcs&usqp=CAU',
  },
  {
    name: 'Jessica',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIqvNKP_YZYQuW0NiswBoHDTmDnwrfeNBLFKvmPITll9E2LXzDnOpZ7lPUprIvrCuI2wI&usqp=CAU',
  },
  {
    name: 'Chamen',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImSDKr9ZPHb81653a12uwsdTDwbmn_27Log&s',
  },
  {
    name: 'Jacob',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3Svt3lP8tIlKr0UMsNQdKxy0NyNgAaOtakf4IX_tMcSgfRT-we77rWVBxByRhRdfEkw&usqp=CAU',
  },
  {
    name: 'Jonathan',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ROxIb7mD-40KbZPoABni9yd5vujo40uqcwK1EJIjCU2KsY4Uyk68wORiPncri1cCZBQ&usqp=CAU',
  },
  {
    name: 'Alex B.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRU68AVwhBfw6sjuntzSy2sDEgBh8Aff69qBRgYumT-Kpwp-IRPOXboKdpN45yi85gPcs&usqp=CAU',
  },
  {
    name: 'Jessica',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIqvNKP_YZYQuW0NiswBoHDTmDnwrfeNBLFKvmPITll9E2LXzDnOpZ7lPUprIvrCuI2wI&usqp=CAU',
  },
  {
    name: 'Chamen',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImSDKr9ZPHb81653a12uwsdTDwbmn_27Log&s',
  },
  {
    name: 'Jacob',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3Svt3lP8tIlKr0UMsNQdKxy0NyNgAaOtakf4IX_tMcSgfRT-we77rWVBxByRhRdfEkw&usqp=CAU',
  },
  {
    name: 'Jonathan',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ROxIb7mD-40KbZPoABni9yd5vujo40uqcwK1EJIjCU2KsY4Uyk68wORiPncri1cCZBQ&usqp=CAU',
  },
];

const Register = () => {
  return (
    <div className="relative isolate overflow-hidden bg-custom-light py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="font-bold text-5xl  py-16 sm:text-4xl font-bold tracking-tight text-custom-yellow">
            Meet the Best Service Providers
          </h2>
          <p className=" text-base sm:text-lg font-medium text-gray-700">
            Register with us today, start doing jobs, and get paid. Our trusted service providers are ready to assist you.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-custom-blue text-white font-semibold text-sm sm:text-base rounded-lg shadow-lg hover:bg-custom-yellow transition duration-300 ease-in-out"
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
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            grabCursor={true}
            className="max-w-full mx-auto"
          >
            {profiles.map((profile, index) => (
              <SwiperSlide key={index} className="text-center">
                <div className="relative bg-yellow-400 border-4 border-black  text-center rounded-lg p-4 shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
                  <img
                    src={profile.img}
                    alt={profile.name}
                    className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] object-cover rounded-lg border-4 border-custom-blue mx-auto"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{profile.name}</h3>
                    <button
                      className="px-4 py-2 bg-black text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black border transition"
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
        className="absolute inset-0 -z-10 opacity-10 h-full w-full object-cover"
      />
    </div>
  );
};

export default Register;
