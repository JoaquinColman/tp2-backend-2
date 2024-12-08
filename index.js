const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const sessionRoutes = require('./routes/sessions');

const app = express();
app.use(express.json());
app.use(cookieParser());


mongoose.connect('mongodb://localhost:27017/auth_demo');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB successfully');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});


require('./config/passport');


app.use('/api/sessions', sessionRoutes);


app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
