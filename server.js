/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
// By default will go to index.js
const chatroom = require('./app/routes');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}


// Base application
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', chatroom.router);

app.get('/*', (req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, 'views', '404.htm'));
});

app.listen(app.get('port'), () => {
  console.log(`app running in port ${app.get('port')}...`);
});
