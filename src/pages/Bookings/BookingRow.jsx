import React from 'react';

const BookingRow = ({ booking }) => {

    const { _id, service, price, date, img } = booking;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask h-24 w-24">
                            <img
                                src={img}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>

            <td>
                {date}
            </td>
            <td>
                {service}

            </td>
            <td>{price}</td>
            <th>
                <button className="btn bg-orange-800 btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;