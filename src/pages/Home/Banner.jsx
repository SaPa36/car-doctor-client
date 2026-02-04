import React from 'react';
import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[350px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden mt-6">
            
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full h-full object-cover object-top" alt="Banner 1" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-3 md:space-y-7 pl-6 md:pl-12 lg:pl-20 w-full md:w-3/4 lg:w-1/2'>
                        <h2 className='text-2xl md:text-5xl lg:text-6xl font-bold'>Affordable Price for Car Servicing</h2>
                        <p className='text-xs md:text-lg opacity-90'>There are many variations of passages of available, but the majority have suffered alteration.</p>
                        <div className='flex gap-2 md:gap-5'>
                            <button className="btn btn-warning border-none text-white btn-xs md:btn-md">Discover More</button>
                            <button className="btn btn-outline border-white text-white btn-xs md:btn-md hover:bg-white hover:text-black">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2 md:bottom-5 gap-3 md:gap-5">
                    <a href="#slide4" className="btn btn-circle btn-xs md:btn-md">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-xs md:btn-md bg-orange-600 border-none">❯</a>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full h-full object-cover object-top" alt="Banner 2" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-3 md:space-y-7 pl-6 md:pl-12 lg:pl-20 w-full md:w-3/4 lg:w-1/2'>
                        <h2 className='text-2xl md:text-5xl lg:text-6xl font-bold'>Affordable Price for Car Servicing</h2>
                        <p className='text-xs md:text-lg opacity-90'>There are many variations of passages of available, but the majority have suffered alteration.</p>
                        <div className='flex gap-2 md:gap-5'>
                            <button className="btn btn-warning border-none text-white btn-xs md:btn-md">Discover More</button>
                            <button className="btn btn-outline border-white text-white btn-xs md:btn-md hover:bg-white hover:text-black">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2 md:bottom-5 gap-3 md:gap-5">
                    <a href="#slide1" className="btn btn-circle btn-xs md:btn-md">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-xs md:btn-md bg-orange-600 border-none">❯</a>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full h-full object-cover object-top" alt="Banner 3" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-3 md:space-y-7 pl-6 md:pl-12 lg:pl-20 w-full md:w-3/4 lg:w-1/2'>
                        <h2 className='text-2xl md:text-5xl lg:text-6xl font-bold'>Affordable Price for Car Servicing</h2>
                        <p className='text-xs md:text-lg opacity-90'>There are many variations of passages of available, but the majority have suffered alteration.</p>
                        <div className='flex gap-2 md:gap-5'>
                            <button className="btn btn-warning border-none text-white btn-xs md:btn-md">Discover More</button>
                            <button className="btn btn-outline border-white text-white btn-xs md:btn-md hover:bg-white hover:text-black">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2 md:bottom-5 gap-3 md:gap-5">
                    <a href="#slide2" className="btn btn-circle btn-xs md:btn-md">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-xs md:btn-md bg-orange-600 border-none">❯</a>
                </div>
            </div>

            {/* Slide 4 */}
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full h-full object-cover object-top" alt="Banner 4" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-3 md:space-y-7 pl-6 md:pl-12 lg:pl-20 w-full md:w-3/4 lg:w-1/2'>
                        <h2 className='text-2xl md:text-5xl lg:text-6xl font-bold'>Affordable Price for Car Servicing</h2>
                        <p className='text-xs md:text-lg opacity-90'>There are many variations of passages of available, but the majority have suffered alteration.</p>
                        <div className='flex gap-2 md:gap-5'>
                            <button className="btn btn-warning border-none text-white btn-xs md:btn-md">Discover More</button>
                            <button className="btn btn-outline border-white text-white btn-xs md:btn-md hover:bg-white hover:text-black">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2 md:bottom-5 gap-3 md:gap-5">
                    <a href="#slide3" className="btn btn-circle btn-xs md:btn-md">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-xs md:btn-md bg-orange-600 border-none">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;