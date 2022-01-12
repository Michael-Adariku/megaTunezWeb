const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/checkAuth')


router.get('/beats', ensureAuthenticated, (req, res) => res.render('./protected-pages/beat-protected', {
  title: 'beat'
}));

router.get('/samples', ensureAuthenticated, (req, res) => res.render('./protected-pages/samples-protected', {
  title: 'Purchase Beat'
}));

router.get('/tutorial',ensureAuthenticated, (req, res) => res.render('./protected-pages/tutorials-protected', {
  title: 'Tutorial'
}));


router.get('/contact',ensureAuthenticated, (req, res) => res.render('./protected-pages/contact-protected', {
  title: 'Contact us'
}));

  
module.exports = router;