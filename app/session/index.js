const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const dotenv = require('dotenv');
const db = require('../db');

if (process.env.NODE_ENV === 'production') {
  // something
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: db.Mongoose.connection
    })
  });
} else {
  dotenv.config();
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  });
}

module.exports = session;
