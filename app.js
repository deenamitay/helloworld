var express = require('express');
var app = express();
var user = require('./user.js');
var swig = require('swig');
var path = require('path');

app.engine('html', swig.renderFile);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, resp) {
	resp.render('hello.html',{jsScript: 'hello.js'});
});

app.use('/members', user);

app.listen(3000, function() {
	console.log('listening to port 3000');
});