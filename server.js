var express = require('express');
var path = require('path');
var multer = require('multer');

var app = express();
var storage = multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, './files');
	},
	filename: function (req, file, callback) {
		callback(null, file.fieldname + '-' + Date.now());
	}
});

var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use('/', function(req, res) {
  		res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, function() {
  console.log('App is listening on port ' + port);
});
