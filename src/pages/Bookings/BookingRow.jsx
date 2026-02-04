import React from 'react';

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, service, price, date, img, status } = booking;

    return (
        <tr className="hover:bg-base-100 transition-colors">
            <th>
                <button 
                    onClick={() => handleDelete(_id)} 
                    className="btn btn-circle btn-outline btn-error btn-xs lg:btn-sm"
                >
                    ✕
                </button>
            </th>
            <td>
                <div className="avatar">
                    {/* Responsive image sizing: w-12 on mobile, w-24 on desktop */}
                    <div className="mask mask-squircle w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24">
                        <img src={img} alt={service} className="object-cover" />
                    </div>
                </div>
            </td>
            <td className="whitespace-nowrap font-medium text-xs md:text-base">
                {date}
            </td>
            <td className="font-bold text-xs md:text-base">
                {service}
            </td>
            <td className="text-xs md:text-base">${price}</td>
            <th>
                {status === 'confirm' ? (
                    <span className="text-green-600 font-bold border border-green-600 px-3 py-1 rounded-lg">
                        Confirmed
                    </span>
                ) : (
                    <button 
                        onClick={() => handleBookingConfirm(_id)} 
                        className="btn bg-orange-800 hover:bg-orange-900 text-white btn-xs md:btn-sm border-none"
                    >
                        Confirm
                    </button>
                )}
            </th>
        </tr>
    );
};

export default BookingRow;