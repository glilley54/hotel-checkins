const BookingItem = ({booking}) => {

    return (
        <div>
            <h3>{booking.name}</h3>
            <p>{booking.email}</p>
            <p>Has booking: {booking.status ? "✅" : "❌"}</p>
        </div>
    )
};


export default BookingItem;