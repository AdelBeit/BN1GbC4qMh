
// read file async
// var fs = require('fs');

// fs.readFile("DATA", 'utf8', function(err, contents){
//     console.log(contents);
// });

// console.log('after calling readFile');

// read file sync
var fs = require('fs');

var contents = fs.readFileSync('DATA', 'utf8');
console.log(contents);
console.log('after calling readFile');

// web server
// var http = require('http');
// var port = 8080;

// var s = http.createServer(function(request, response){
//     response.writeHead(200);
//     response.write("hello world");
//     response.end();
// });

// s.listen(port);
 
// console.log("Listening on http://127.0.0.1:" + port + "/");


//https://code-maven.com/argv-raw-command-line-arguments-in-nodejs