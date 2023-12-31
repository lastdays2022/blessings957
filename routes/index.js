const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('login'));

// Dashboard
router.get('/login', ensureAuthenticated, (req, res) =>
  res.render('login', {
    user: req.user
  })
);

module.exports = router;
