const express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/fetch', (req, res) => {
    res.sendFile(__dirname + '/fetch.html');
});

app.listen(3000);