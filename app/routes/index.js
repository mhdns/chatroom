const router = require('express').Router();

router.route('/').get((req, res) => {
  res.render('login', { pageTitle: 'My Login Page' });
});

router.route('/rooms').get((req, res) => {
  res.render('rooms');
});

router.route('/chat').get((req, res) => {
  res.render('chatroom');
});

module.exports = { router };
