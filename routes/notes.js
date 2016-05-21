var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/:idNote', function(req, res, next){
	
});

router.get('/:tag', function(req, res, next){
	
});
router.post('/add',function(req , res , next){
	
});
router.post('/update', function(req, res , next){
	
});
router.post('/delete', function(req, res , next){
	
});

module.exports = router;
