import React, { useState, useEffect } from 'react';
import BookingList from '../components/BookingList'
import BookingService, {deleteBooking} from '../services/BookingService'
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

    const deleteBooking = idToDelete => {
        BookingService.deleteBooking(idToDelete).then(() => {
            setBookings(bookings.filter(booking =>booking._id !== idToDelete))
        })
    }
    

    return (
        <>
            <div>
                <h1>Hotel Bookings</h1>
                <BookingForm addBooking={addBooking} postBooking={BookingService.postBooking} />
                <BookingList bookings={bookings} deleteBooking = {deleteBooking} />
            </div>
        </>
    )

};

export default BookingContainer;
