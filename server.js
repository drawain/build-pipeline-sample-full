var express = require("express");
var app = express();
var lengthOf = require('./length');

app.get('/', function(req, res) {
    res.send('Hi there!');
});

app.get('/lengthOfMedveDisznoEmber', function(req, res) {
    res.send('A medvedisznoember hossza: ' + lengthOf('MedveDisznoEmber'));
});

app.listen(process.env.PORT, function() {
    console.log('Server started in the port: ', process.env.PORT);
});