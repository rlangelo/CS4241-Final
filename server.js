var express = require('express');
var path = require('path');
var fs = require('fs');
var http = require('http');
var underscore = require('underscore');

var programNames = ["Word", "Powerpoint"]

var app = express();
var port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '/public')));

app.get('/programs', function (req, res) {
    res.send(JSON.stringify(programNames))
});


app.listen(port, function () {
    console.log('App is listening on port ' + port);
});
