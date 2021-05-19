const BookingItem = ({booking, deleteBooking}) => {

    return (
        <div>
            <hr></hr>
            <h3>Name: {booking.name}</h3>
            <p>Email: {booking.email}</p>
            <p>Has booking: {(booking.status ==="True") ? "✅"  : "❌"}</p>
            <button class = "btn btn-outline-dark" onClick = {() => deleteBooking(booking._id)}>🗑</button>
        </div>
    )
};


export default BookingItem;