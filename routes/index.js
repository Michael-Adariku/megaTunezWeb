const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/checkAuth')


//------------ Welcome Route ------------//
// Welcome Page
router.get('/welcome',ensureAuthenticated, (req, res) => res.render('welcome', {
  title: 'Welcome'
}));


// Welcome Page
router.get('/',forwardAuthenticated, (req, res) => res.render('index', {
  title: 'Homepage'
}));


router.get('/about',forwardAuthenticated, (req, res) => res.render('about', {
    title: 'about',    
}));



router.get('/contact',forwardAuthenticated,(req, res) => res.render('contact', {
  title: 'contact us'
}));

router.get('/beats',forwardAuthenticated, (req, res) => res.render('beat', {
  title: 'Beat'
}));


router.get('/tutorial',forwardAuthenticated,(req, res) => res.render('tutorials', {
  title: 'My Tutorials'
}));

router.get('/blog',(req, res) => res.render('blog', {
  title: 'My blog'
}));

router.get('/post-1',forwardAuthenticated,(req, res) => res.render('./full-posts/post-1', {
  title: 'post 1'
}));

module.exports = router;