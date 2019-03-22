var express = require('express');
var router = express.Router();

const data = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Saje Diffusers', message: 'Invite the power of nature into your décor with an essential oil diffuser. Fill any space, big or small with wellness-enhancing oil blends.', whyuseone: 'WHY USE ONE? Diffusing allows you to bring nature’s abundant healing properties into your home, office, or anywhere you choose to diffuse. If youre looking for more calm, more rest, more energy or more focus, theres a diffuser blend to help with that.' });
  
});

/* A dynamic placeholder */
router.get('/:user', function(req, res, next) {
  console.log('data:',data);
  console.log('user:',req.params.user);
  res.render('desc', data[req.params.user]);
});

module.exports = router;

