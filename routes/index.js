const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/checkAuth')


//------------ Welcome Route ------------//
// Welcome Page
router.get('/welcome', (req, res) => res.render('welcome', {
  title: 'Welcome'
}));


// Welcome Page
router.get('/', (req, res) => res.render('index', {
  title: 'Homepage'
}));


router.get('/about', (req, res) => res.render('about', {
    title: 'about',    
}));



router.get('/contact',(req, res) => res.render('contact', {
  title: 'contact us'
}));

router.get('/beats', (req, res) => res.render('beat', {
  title: 'Beat'
}));


router.get('/tutorial',(req, res) => res.render('tutorials', {
  title: 'My Tutorials'
}));

router.get('/blog',(req, res) => res.render('blog', {
  title: 'My blog'
}));

router.get('/post-1',(req, res) => res.render('./full-posts/post-1', {
  title: 'post 1'
}));

module.exports = router;