var express = require('express');
var router = express.Router();

router.get('/:person', function(req, res){
	var rendarParms = {
    jsScript: 'cool.js',
		nameofUser: req.params.person
	};

	res.render('members.html',rendarParms);
	// res.send('hello ' + req.params.person)
});
module.exports = router;