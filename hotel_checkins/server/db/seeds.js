use hotel_checkins;
db.dropDatabase();

db.bookings.insertMany ([
    { 
    name: "Test",
    email: "test@test.com",
    status: true
    }
]);