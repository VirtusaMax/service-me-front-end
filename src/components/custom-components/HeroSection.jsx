import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/hero_section/heropic.png'

const HeroSection = () => {
    return(
        <div className='relative top-20 bg-[#0E0524] flex flex-col md:flex-row h-[800px] md:h-[500px] justify-center items-center'>
            <div className='w-full md:w-1/2 flex flex-col justify-center py-20 md:pr-16 xl:pr-40 md:py-0 border px-6 md:px-0'>
                <div className='text-center text-white md:text-left space-y-4'>
                    <p className='text-5xl font-semibold lg:text-7xl'> Your Trusted Partner for home services </p>
                   
                    <p className='flex-wrap'>New way to find people to do your jobs. If you are one of those thousands of people who struggle to find people to do Jobs or struggle to find jobs, this is for you.</p>
                  
                  <div className="space-x-2">
                    <button className="bg-[#FCC215] text-[#0E0524] font-bold text-s h-[39px] px-6 py-0 rounded-full mt-2">
                    I want to work
                    </button>
                    <button className="bg-[#FCC215] text-[#0E0524] font-bold text-s h-[39px] px-6 py-0 rounded-full mt-2">
                    I want to hire</button> 
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center'>
                <img src={heroImg}/>
            </div>

        </div>

    );
};

export default HeroSection;


