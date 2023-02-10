/*
    user.js
    Name: Sunand Shanthos Kumar
    StudentID: 301297793
    Date: 02/09/2023
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
