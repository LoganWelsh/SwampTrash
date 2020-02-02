import * as http from 'http';
import * as fs from 'fs';
import * as url from 'url';
import * as express from 'express';
var app = express();

app.get('/predictions', function (req, res) {
    fs.readFile('./images/20200201_174104.jpg', (err, data) => {
        if (err) throw err;

    });
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})