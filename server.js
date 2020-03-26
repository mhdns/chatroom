const express = require('express');
// By default will go to index.js
const chatroom = require('./app');

// Base application
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', chatroom.router);

app.listen(app.get('port'), () => {
  console.log(`app running in port ${app.get('port')}...`);
});
