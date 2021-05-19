import React, {useState, useEffect} from 'react';
import BookingsList from '../components/BookingsList'
import BookingsService from '../services/BookingsService'

const BookingsContainer = () => {

    const [bookings, setBookings] = useState([])
    
    useEffect(() => {
        BookingsService.getBookings()
            .then(bookings => setBookings(bookings))
    }, [])


    


    return (
        <div>
            <p>This is the bookings container.</p>
            <BookingsList bookings = {bookings}/>
        </div>
    )

};

export default BookingsContainer;
