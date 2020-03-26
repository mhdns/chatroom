const express = require('express');

// Base application
const app = express();

// Express has built in table of configurable settings
// You can create your own name value pairs as below
// process.env.PORT allows you to access a envronment variable called PORT
// cloud providers set the port to the available instance
app.set('port', process.env.PORT || 3000);

// This is default, change the path and express will look there for dynamic templates
app.set('views', './views');

// Do not need to require ejs as express will get it
app.set('view engine', 'ejs');

// To serve files, we use res.sendFile method
app.get('/', (req, res) => {
  // res.send(`<h1>${req.hello}Hello there</h1>`);
  // you don't need to set content type header as express will detect it
  // res.sendFile(path.resolve(__dirname, 'views', 'login.htm'));
  // EJS: you don't need to give the file path as express expects
  // all dynamic templates to reside in a folder called views.
  res.render('login', { pageTitle: 'My Login Page' });
});

app.get('/dashboard', (req, res) => {
  res.send('<h1>This is a dashboard</h1>');
});

app.listen(app.get('port'), () => {
  console.log(`app running in port ${app.get('port')}...`);
});
