import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();

    const url = `/bookings?email=${user?.email}`;

    useEffect(() => {
        if (user?.email) {
            axiosSecure.get(url)
                .then(res => {
                    setBookings(res.data);
                })
        }
    }, [url, axiosSecure, user?.email]);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'Your booking has been deleted.', 'success');
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining);
                        }
                    })
            }
        })
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-5">Total Bookings: {bookings.length}</h2>

            {/* FIX: overflow-x-auto allows swiping on mobile */}
            <div className="overflow-x-auto w-full shadow-xl rounded-xl border border-base-300">
                <table className="table w-full">
                    <thead className="bg-base-200 text-base">
                        <tr>
                            <th>Action</th>
                            <th>Image</th>
                            <th>Date</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => (
                            <BookingRow 
                                key={booking._id} 
                                booking={booking} 
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;