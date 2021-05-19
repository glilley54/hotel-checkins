import React, { useState, useEffect } from 'react';
import BookingList from '../components/BookingList'
import BookingService from '../services/BookingService'
import BookingForm from '../components/BookingForm';

const BookingContainer = () => {

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        BookingService.getBookings()
            .then(bookings => setBookings(bookings))
    }, [])

    const addBooking = (booking) => {
        let temp = bookings.map(b => b);
        temp.push(booking);
        setBookings(temp);
    }



    return (
        <>
            <div>
                <h1>Hotel Bookings</h1>
                <BookingList bookings={bookings} />
                <BookingForm addBooking={addBooking} postBooking={BookingService.postBooking} />
            </div>
        </>
    )

};

export default BookingContainer;
