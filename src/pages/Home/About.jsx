import React from "react";
import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen p-4 lg:p-0">
      <div className="hero-content flex-col lg:flex-row gap-10 lg:gap-0">
        {/* Left Side: Images */}
        <div className="w-full lg:w-1/2 relative pb-20 lg:pb-0">
          <img 
            src={person} 
            className="w-3/4 rounded-lg shadow-2xl" 
            alt="Mechanic"
          />
          <img
            src={parts}
            className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"
            alt="Car parts"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-1/2 space-y-5">
          <p className="text-xl lg:text-2xl text-amber-600 font-bold">About Us</p>
          <h1 className="text-3xl lg:text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-gray-600">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-orange-600 border-none text-white hover:bg-orange-700">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;