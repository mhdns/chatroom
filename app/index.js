const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('login', { pageTitle: 'My Login Page' });
});

router.get('/info', (req, res) => {
  res.send('Testing ');
});

module.exports = {
  router
};
