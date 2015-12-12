var express = require('express');
var path = require('path');
var fs = require('fs');
var http = require('http');
var underscore = require('underscore');

var programs = [{
    Title: "Stale Bread Uses",
    Description: "Use old, crusty, stale bread for breadcrumbs or french toast",
    
},
{
    Title: "More Lemon Juice",
    Description: "Warm up your lemons before juicing for more juice",
    
}
]


var app = express();
var port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '/public')));

app.get('/tips', function (req, res) {
    res.send(JSON.stringify(programs))
});


app.listen(port, function () {
    console.log('App is listening on port ' + port);
});
