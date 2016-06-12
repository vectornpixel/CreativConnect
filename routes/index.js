var express = require('express');
var router = express.Router();
var profileController = require('./controllers/profile');
//var portfolioController = require('./controllers/portfolio');

// GET Profile
router.get('/profile', profileController.profileinfo);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
