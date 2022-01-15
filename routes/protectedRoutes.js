const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/checkAuth')


router.get('/beats', ensureAuthenticated, (req, res) => res.render('./protected-pages/beat-protected', {
  title: 'beat',
  name: req.user.name
}));

router.get('/samples', ensureAuthenticated, (req, res) => res.render('./protected-pages/samples-protected', {
  title: 'Purchase Beat'
  ,
  name: req.user.name
}));

router.get('/tutorial',ensureAuthenticated, (req, res) => res.render('./protected-pages/tutorials-protected', {
  title: 'Tutorial',
  name: req.user.name
}));


router.get('/contact',ensureAuthenticated, (req, res) => res.render('./protected-pages/contact-protected', {
  title: 'Contact us',
  name: req.user.name
}));

router.get('/afro',ensureAuthenticated, (req, res) => res.render('./beatsPage/afro', {
  title: 'Afro beats',
  name: req.user.name
}));

router.get('/afro-pop',ensureAuthenticated, (req, res) => res.render('./beatsPage/afroPop', {
  title: 'Afro-pop beats',
  name: req.user.name
}));

router.get('/trap',ensureAuthenticated, (req, res) => res.render('./beatsPage/trap', {
  title: 'Trap beats',
  name: req.user.name
}));
router.get('/trap-soul',ensureAuthenticated, (req, res) => res.render('./beatsPage/TrapSoul', {
  title: 'Trap-soul beats',
  name: req.user.name
}));
router.get('/reggae',ensureAuthenticated, (req, res) => res.render('./beatsPage/reggae', {
  title: 'Reggae beats',
  name: req.user.name
}));

router.get('/dancehall',ensureAuthenticated, (req, res) => res.render('./beatsPage/dancehall', {
  title: 'Dancehall beats',
  name: req.user.name
}));

router.get('/pop',ensureAuthenticated, (req, res) => res.render('./beatsPage/pop', {
  title: 'POP beats',
  name: req.user.name
}));
router.get('/rnb',ensureAuthenticated, (req, res) => res.render('./beatsPage/rnb', {
  title: 'Rnb beats',
  name: req.user.name
}));

router.get('/mixes',ensureAuthenticated, (req, res) => res.render('./beatsPage/mixes', {
  title: 'Musical mixes',
  name: req.user.name
}));
// afro
module.exports = router;