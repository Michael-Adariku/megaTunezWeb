const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/checkAuth')


router.get('/tutorial',ensureAuthenticated, (req, res) => res.render('./protected-pages/tutorials-protected', {
  title: 'Tutorial',
  name: req.user
}));

router.get('/beats', (req, res) => res.render('./protected-pages/beat-protected', {
  title: 'beat'
}));

router.get('/samples', (req, res) => res.render('./protected-pages/samples-protected', {
  title: 'Purchase Beat'
  
}));


router.get('/contact', (req, res) => res.render('./protected-pages/contact-protected', {
  title: 'Contact us'
}));

router.get('/afro', (req, res) => res.render('./beatsPage/afro', {
  title: 'Afro beats'
}));

router.get('/afro-pop', (req, res) => res.render('./beatsPage/afroPop', {
  title: 'Afro-pop beats'
}));

router.get('/trap', (req, res) => res.render('./beatsPage/trap', {
  title: 'Trap beats'
}));
router.get('/trap-soul', (req, res) => res.render('./beatsPage/TrapSoul', {
  title: 'Trap-soul beats'
}));
router.get('/reggae', (req, res) => res.render('./beatsPage/reggae', {
  title: 'Reggae beats'
}));

router.get('/dancehall', (req, res) => res.render('./beatsPage/dancehall', {
  title: 'Dancehall beats'
}));

router.get('/pop', (req, res) => res.render('./beatsPage/pop', {
  title: 'POP beats'
}));
router.get('/rnb', (req, res) => res.render('./beatsPage/rnb', {
  title: 'Rnb beats'
}));

router.get('/mixes', (req, res) => res.render('./beatsPage/mixes', {
  title: 'Musical mixes'
}));
// afro
module.exports = router;