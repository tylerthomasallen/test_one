const http = require('http');

// creating a server object
http.createServer(function (req, res) {
    const url = req.url;
    if (url === '/about') {
        res.write('About Page!');
        res.end();
    } else if (url === '/test') {
        res.write('Testing Page!');
        res.end();
    } else {
        res.write('Default page!');
        res.end();
    }
}).listen(3001, function() {
    console.log('server start at port 3001');
});