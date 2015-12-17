var express = require('express');
var path = require('path');
var fs = require('fs');
var http = require('http');
var underscore = require('underscore');

var programNames = ["Altium", "Audacity", "AutoCAD", "CD Burner XP", "CES Edupack", "ChemDrawPro", "AutoCAD Civil3D", "Creo",
                      "Cumulus", "DrJava", "Ecopy", "EndNote", "Flip4Mac", "Four Winds", "Internet Explorer 11",
                      "Inventor", "AutoCAD Map3D", "Maple", "MathCad", "Mathematica", "Autodesk Maya", "McAfee", "MEP", "Microsoft Net Framework",
                      "Microsoft Office", "Microsoft Office Communicator", "Microsoft Visual Studio", "Motion Builder",
                      "Autodesk Mudbox", "Navisworks Manage", "OnCenter", "PuTTY", "ReCap", "Remedy",
                      "Remote Desktop Connection for Mac", "Autodesk Revit", "Robot Structural Analysis", "SolidWorks",
                      "SPSS", "Stuffit 2010", "AutoCAD Utility Design", "Viz", "Windows Media Encoder", "X11 for Intel Mac",
                      "X-Win32"];

var app = express();
var port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '/public')));

app.get('/programs', function (req, res) {
    res.send(JSON.stringify(programNames))
});


app.listen(port, function () {
    console.log('App is listening on port ' + port);
});
