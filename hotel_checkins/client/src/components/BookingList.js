import BookingItem from './BookingItem';

const BookingList = ({ bookings, deleteBooking }) => {
    return (
        <div>
            {bookings.map(booking => {
                return (
                    <BookingItem
                        booking={booking}
                        deleteBooking={deleteBooking}
                    />
                )
            })}
        </div>
    )

};

export default BookingList;