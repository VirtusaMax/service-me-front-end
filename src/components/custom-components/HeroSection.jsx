import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/hero_section/heropic.png'

const HeroSection = () => {
    return(
        <div className='top-20  container-fluid bg-[#0E0524] grid grid-cols-1 md:grid-cols-2 min-h-[650px] justify-content-center align-item-center d-flex'>
            <div className='ml-10 flex flex-col justify-center py-20 md:pr-16 xl:pr-40 md:py-0'>
                <div className='text-center text-white md:text-left space-y-4'>
                    <p className='text-5xl font-semibold lg:text-7xl'> Your Trusted Partner for home services </p>
                   
                    <p>New way to find people to do your jobs. If you are one of those thousands of people who struggle to find people to do Jobs or struggle to find jobs, this is for you.</p>
                  
                  <div className="space-x-2">
                    <button className="bg-[#FCC215] text-[#0E0524] font-bold text-s h-[39px] px-6 py-0 rounded-full mt-2">
                    I want to work
                    </button>
                    <button className="bg-[#FCC215] text-[#0E0524] font-bold text-s h-[39px] px-6 py-0 rounded-full mt-2">
                    I want to hire</button> 
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img src={heroImg}/>
            </div>

        </div>

    );
};

export default HeroSection;


