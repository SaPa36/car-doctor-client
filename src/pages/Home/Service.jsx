import React from "react";

const Service = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card bg-base-100 w-96 mb-5 shadow-2xl shadow-amber-600">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Service Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
