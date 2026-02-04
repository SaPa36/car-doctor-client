import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-lemon-two.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-10 px-4"> {/* Added horizontal padding for mobile edges */}
      <div className="text-center space-y-3 mb-10">
        <p className="text-xl md:text-2xl font-bold text-amber-600">Services</p>
        <h2 className="text-3xl md:text-5xl font-bold">Our Service Area</h2> {/* Fixed txt-5xl typo */}
        <p className="max-w-2xl mx-auto text-gray-600">
          The majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable.
        </p>
      </div>

      {/* 1. Removed ml-8 (it causes off-centering)
          2. Added gap-6 to space out the cards
          3. Kept your grid logic which is correct
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;