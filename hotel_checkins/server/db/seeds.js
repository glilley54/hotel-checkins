use hotel_checkins;
db.dropDatabase();

db.bookings.insertMany ([
    { 
    name: "Test",
    email: "test@test.com",
    status: true
    },
    { 
        name: "Test2",
        email: "test2@test.com",
        status: false
    },
    { 
        name: "Test3",
        email: "test3@test.com",
        status: true
    }

]);