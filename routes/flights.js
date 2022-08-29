var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('../views/flights/index');
// });

//GET /flights/new 
router.get('/new', flightsCtrl.new)
//POST /flights 
router.post('/', flightsCtrl.create)
//Index /flights
router.get('/',flightsCtrl.index)




module.exports = router;
