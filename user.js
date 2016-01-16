var express = require('express');
var router = express.Router();
router.get('/:person', function(req, res){
	var rendarParms = {
		nameofUser: req.params.person
	}
	res.render('hello.html',rendarParms)
	// res.send('hello ' + req.params.person)
});
module.exports = router;