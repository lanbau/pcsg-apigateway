var express = require('express');
var router = express.Router();
var mockData = require('../MOCK_DATA.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(mockData);
});

module.exports = router;
