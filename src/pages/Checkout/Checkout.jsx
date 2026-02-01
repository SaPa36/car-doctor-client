import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const services = useLoaderData();

    // Add this safeguard!
    if (!services) {
        return <div>Loading or Service not found...</div>;
    }

    

    const {title, _id, price, img} = services;
    return (
        <div>
            
            <h2>Book services: {title} </h2>
        </div>
    );
};

export default Checkout;