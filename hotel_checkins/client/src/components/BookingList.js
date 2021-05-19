import BookingItem from './BookingItem';

const BookingList = ({ bookings }) => {
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

export default BookingList;