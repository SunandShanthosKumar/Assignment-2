/*
    index.js
    Name: Sunand Shanthos Kumar
    StudentID: 301297793
    Date: 02/09/2023
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('Home', { title: 'Home'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('About', { title: 'About'});
});

/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('Products', { title: 'Products'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('Services', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('Contact', { title: 'Contact'});
});

module.exports = router;