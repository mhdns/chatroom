const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
const Mongoose = require('mongoose').connect(process.env.MONGO_URI);

Mongoose.connection.on('error', (error) => {
  // eslint-disable-next-line no-console
  console.log(`MongoDB Error: ${error}`);
});

module.exports = { Mongoose };
