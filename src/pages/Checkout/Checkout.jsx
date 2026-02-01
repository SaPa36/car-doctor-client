import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const services = useLoaderData();

    // Add this safeguard!
    if (!services) {
        return <div>Loading or Service not found...</div>;
    }



    const { title, _id, price, img } = services;
    return (
        <div>

            



            <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
                <div className="w-full max-w-4xl bg-base-100 shadow-2xl rounded-xl p-8">
                    <h2 className="text-3xl font-bold text-center mb-6">Confirm Booking: {title}</h2>
                    <form>
                        <fieldset className="fieldset">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                <div>
                                    <label className="label">Name</label>
                                    <input type="text" className="input input-bordered w-full" placeholder="First Name" />
                                </div>
                                <div>
                                    <label className="label">Date</label>
                                    <input type="date" className="input input-bordered w-full" />
                                </div>
                                <div>
                                    <label className="label">Email</label>
                                    <input type="email" className="input input-bordered w-full" placeholder="Email" />
                                </div>
                                <div>
                                    <label className="label">Due Amount</label>
                                    <input type="text" className="input input-bordered w-full" defaultValue={price} readOnly />
                                </div>
                            </div>

                            <button className="btn btn-neutral btn-block mt-6">Order Confirm</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
            );
};

            export default Checkout;