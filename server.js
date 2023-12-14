require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bookRoute = require('./routes/BooksRoute');

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/api/books', bookRoute);

mongoose.connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Node API app is running on port ${PORT}`);
    });
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log(error);
  });
