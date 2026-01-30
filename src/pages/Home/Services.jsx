import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="text-center mt-10 space-y-3">
      <p className="text-2xl font-bold text-amber-600">Services</p>
      <h2 className="txt-5xl font-bold">Our Service Area</h2>
      <p>
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don't look even slightly believable.{" "}
      </p>

      <div className="grid rounded-3xl mb-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8">
        {services.map((service) => (
          <Service service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
