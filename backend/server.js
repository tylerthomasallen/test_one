const http = require('http');

// creating a server object
http.createServer(function (req, res) {
    // writing a response to requests
    res.write('Hello, Server!');
    res.end();
}).listen(3001, function() {
    console.log('server start at port 3001');
    //the server object listens on port 3000

})