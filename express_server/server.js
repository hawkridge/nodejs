let express = require('express'),
    app = express(),
    server;

app.use(function (req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
});

app.get('/', function (req, res) {
   res.send('Hello Express');
});

server = app.listen(8000, function () {
   console.log('Express, listening on port: 8000');
});



