var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/test', function(req, res, next) {
  axios({
    method: 'post',
    url: 'https://sandboxapi.fsi.ng/atlabs/airtime/send',
    headers: {
      "Sandbox-Key": "5fb3f96f935ad14a24bde72d6a6dd619",
      "Content-Type": "application/json",
    },
    data: {
      recipients: [{ phoneNumber: "+2348093481350", amount: "20", currencyCode: "USD" }]
    }
  })
  .then((response) => {
    console.log(response.data);
    console.log('message sent');

  })
  .catch((error) => console.log(error))

});

module.exports = router;
