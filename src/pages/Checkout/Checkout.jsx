import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Checkout = () => {

    const {user} = useContext(AuthContext);
    const services = useLoaderData();

    const { title, _id, price, img } = services;

    const handleOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const dueAmount = form.dueAmount.value;

        const booking = {
            customerName: name,
            email,
            date,
            service_id: _id,
            service: title,
            price: dueAmount,
            img: img
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Service Booked Successfully');
            }
        })
    }
    return (
        
            <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
                <div className="w-full max-w-4xl bg-base-100 shadow-2xl rounded-xl p-8">
                    <h2 className="text-3xl font-bold text-center mb-6">Confirm Booking: {title}</h2>
                    <form onSubmit={handleOrder}>
                        <fieldset className="fieldset">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                <div>
                                    <label className="label">Name</label>
                                    <input type="text" name="name" defaultValue={user?.name} className="input input-bordered w-full" placeholder="First Name" />
                                </div>
                                <div>
                                    <label className="label">Date</label>
                                    <input type="date" name="date" className="input input-bordered w-full" />
                                </div>
                                <div>
                                    <label className="label">Email</label>
                                    <input type="email" name="email" defaultValue={user?.email} className="input input-bordered w-full" placeholder="Email" />
                                </div>
                                <div>
                                    <label className="label">Due Amount</label>
                                    <input type="text" name="dueAmount" className="input input-bordered w-full" defaultValue={'$' + price} readOnly />
                                </div>
                            </div>

                            
                            <input className="btn btn-neutral btn-block mt-6" type="submit" value="Order Confirm" />
                        </fieldset>
                    </form>
                </div>
            </div>
        
            );
};

            export default Checkout;