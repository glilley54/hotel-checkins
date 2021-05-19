use hotel_checkins;
db.dropDatabase();

db.bookings.insertMany ([
    { 
    name: "Kieran",
    email: "kieran@hotmail.com",
    status: "True"
    },
    { 
        name: "Gordon",
        email: "gordon@gmail.com",
        status: "False"
    },
    { 
        name: "Niall",
        email: "niall@gmail.com",
        status: "True"
    }

]);