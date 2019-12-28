const express = require('express');
const bodyparser = require('body-parser');

var app = express();
var jsonparser = bodyparser.json();

app.post('/update', jsonparser, function(req, res) {
    var value = req.body.value;
    var id = req.body.id;

    console.log(value + " : "+ id);

    var update = require('./update');
    update(id, value);

    res.end();
});

app.listen(8585);