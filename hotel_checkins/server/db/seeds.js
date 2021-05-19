use hotel_checkins;
db.dropDatabase();

db.bookings.insertMany ([
    { 
    name: "Kieran",
    email: "kieran@hotmail.com",
    status: true
    },
    { 
        name: "Gordon",
        email: "gordon@gmail.com",
        status: false
    },
    { 
        name: "Niall",
        email: "niall@gmail.com",
        status: true
    }

]);