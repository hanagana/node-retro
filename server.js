var http = require("http");
var fs = require("fs");

// var server = http.createServer(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/plain" });

//     response.end("Hello World");
// });

// server.listen(8081);

// var data = fs.readFile("input.txt", "buffer", function(err, data) {
//     if(err) return console.error(err);
//     console.log(data);
// });

// console.log("Server dang chay tren port 8081");

new Promise(function(resolve, reject) {
    console.log('Initial');
    resolve();
}).then(function() {
    console.log('Do this whatever happened before');
})
.then(function() {
    throw new Error('Something failed');        
    console.log('Do this');
})
.catch(function() {
    console.log('Do that');});

