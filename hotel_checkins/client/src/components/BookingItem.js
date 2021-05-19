const BookingItem = ({booking}) => {

    return (
        <div>
            <h3>Name: {booking.name}</h3>
            <p>Email: {booking.email}</p>
            <p>Has booking: {(booking.status ==="True") ? "✅"  : "❌"}</p>
            <hr></hr>
        </div>
    )
};


export default BookingItem;