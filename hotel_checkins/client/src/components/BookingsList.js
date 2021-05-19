import BookingItem from './BookingItem';

const BookingsList = ({ bookings }) => {
    return (
        <div>
            {bookings.map(booking => {
                return (
                    <BookingItem
                        booking={booking}
                    />
                )
            })}
        </div>
    )

};

export default BookingsList;