import React from 'react';

import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';

const Banner = () => {
    // Shared overlay content to keep code clean
    const overlayContent = (
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
            <div className='text-white space-y-4 lg:space-y-7 pl-6 lg:pl-12 w-full md:w-2/3 lg:w-1/2'>
                <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold'>
                    Affordable Price for Car Servicing
                </h2>
                <p className='text-sm md:text-lg'>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                </p>
                <div className='flex flex-wrap gap-3 lg:gap-5'>
                    <button className="btn btn-primary btn-sm md:btn-md mr-2 lg:mr-5">Discover More</button>
                    <button className="btn btn-outline btn-secondary btn-sm md:btn-md">Latest Project</button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="carousel w-full h-[400px] lg:h-[600px] rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full object-cover" alt="Banner 1" />
                {overlayContent}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                    <a href="#slide4" className="btn btn-circle btn-sm md:btn-md bg-[rgba(255,255,255,0.2)] border-none text-white hover:bg-orange-600">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-sm md:btn-md bg-orange-600 border-none text-white">❯</a>
                </div>
            </div>
            
            {/* Repeat for other slides using similar structure or map through an array */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full object-cover" alt="Banner 2" />
                {overlayContent}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                    <a href="#slide1" className="btn btn-circle btn-sm md:btn-md">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-sm md:btn-md">❯</a>
                </div>
            </div>
            {/* ... slide 3 and 4 ... */}
        </div>
    );
};

export default Banner;