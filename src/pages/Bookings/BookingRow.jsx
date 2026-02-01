

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {

    const { _id, service, price, date, img, status } = booking;

 

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-error btn-xs">X</button>
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
                {status === 'confirm' ? <span className="text-green-600 font-bold">Confirmed</span> : 
                <button onClick={() => handleBookingConfirm(_id)} className="btn bg-orange-800 btn-ghost btn-xs">Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;