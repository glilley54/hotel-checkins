const BookingItem = ({booking, deleteBooking}) => {

    return (
        <div>
            <h3>Name: {booking.name}</h3>
            <p>Email: {booking.email}</p>
            <p>Has booking: {(booking.status ==="True") ? "✅"  : "❌"}</p>
            <button onClick = {() => deleteBooking(booking._id)}> 🗑 </button>
            <hr></hr>
        </div>
    )
};


export default BookingItem;