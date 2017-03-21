var express = require('express');
var router = express.Router();
var request = require('request');
var apikey = process.env.PCSGAPI

console.log(apikey)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('apis', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log(req.body)

  var options = {
    url: 'http://128.199.240.187:8000',
    headers: {
      'Host': 'pcsg-apigateway.herokuapp.com',
      'apikey': apikey
    }
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      res.send(info)
    }
  }

  if (req.body.name === "Donald Duck") {
    request(options, callback);
  }


});

module.exports = router;
