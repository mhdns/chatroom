const express = require('express');

// Base application
const app = express();

// Express has built in table of configurable settings
// You can create your own name value pairs as below
// process.env.PORT allows you to access a envronment variable called PORT
// cloud providers set the port to the available instance
app.set('port', process.env.PORT || 3000);


const helloMiddleware = (req, res, next) => {
  req.hello = 'Hello..you there...';
  next();
};

// app.use('/dashboard', middleware) will ensure that the middleare runs for all
// routes with /dashboard
app.use(helloMiddleware);

// This is a get request, the next argument can be called if the
// the request needs to be sent to another function
// commonly used with middlewares
// we are manually injecting the middleware
app.get('/', helloMiddleware, (req, res, next) => {
  res.send(`<h1>${req.hello}Hello there</h1>`);
  next();
});

app.get('/dashboard', (req, res, next) => {
  res.send('<h1>This is a dashboard</h1>');
  next();
});

app.listen(app.get('port'), () => {
  console.log(`app running in port ${app.get('port')}...`);
});
