var express = require('express')
var app = express();
var user = require('./user.js')
var swig = require('swig')

app.engine('html', swig.renderFile)

app.get('/', function(req, resp) {
	resp.render('hello.html', {nameofUser: 'world'})
});

app.use('/members', user)

app.listen(3000, function() {
	console.log('listening to port 3000')
});