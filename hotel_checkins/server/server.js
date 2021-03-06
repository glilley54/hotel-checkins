const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_routers')
const cors = require('cors');

app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
  .then(client => {
    const db = client.db('hotel_checkins');
    const bookingsCollection = db.collection('bookings');
    const bookingsRouter = createRouter(bookingsCollection);
    app.use('/api/bookings', bookingsRouter);
  })
  .catch(console.error);

  
app.use(express.json());

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
