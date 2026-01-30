import React from 'react';

import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full lg:h-[600px] rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={img1}
                    className="w-full" />
                <div className="absolute   bottom-0 align-center flex flex-col w-1/2 
                bg-[linear-gradient(90deg,rgba(21,21,21,1)_0%,rgba(21,21,21,0)_100%)] h-full justify-end">
                    <h2 className="text-6xl ml-10">Affordable Price for Car Services</h2>
                    <p className='ml-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam maiores 
                        nesciunt quasi delectus eos fuga laboriosam .</p>
                        <div className='mt-5 mb-10 ml-10'>
                            <button className="btn btn-success mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide4" className="btn btn-circle mr-3">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="w-full" />
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className="w-full" />
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide2" className="btn btn-circle mr-3">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={img4}
                    className="w-full" />
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;