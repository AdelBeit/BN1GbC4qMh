///// list dir content 2 //////////////////////////
var dir = require('node-dir');
var path = '.';
path = process.argv[2];
// dir.files(__dirname, function(err, files) {
// dir.files(path, function(err, files) {
//     if (err) throw err;
//     console.log(files);
    
//     for (var i=0; i<files.length; i++){
//         console.log(files[i].slice(2,files[i].length));
//     }
//     // console.log(files);
// });

var files = dir.files(path,{sync:true});

console.log('files');
console.log(files);


///// list dir cont //////////////////////////
var fs = require('fs');

if (process.argv.length <= 2){
    console.log("Usage: " + __filename + " path/to");
    process.exit(-1);
}

var path = process.argv[2];

// fs.readdir(path, function(err,items){
//     // console.log(items);

//     for (var i=0; i<items.length; i++){

//         var file = path + '/' + items[i];

//         // console.log("start: " + file);

//         // fs.stat(file, generate_callback(file));
//         // console.log(items[i].stats);
//     }
//     return items;
// });



// function generate_callback(file){
//     return function(err, stats){
//         console.log(file);
//     }
// }

var dirlist = fs.readdirSync(path);

console.log(dirlist);


///// drive/file info //////////////////////////
// var fs = require('fs');

// if (process.argv.length <= 2){
//     console.log("Usage: " + __filename + " path/to");
//     process.exit(-1);
// }

// var path = process.argv[2];

// fs.stat(path, function(err, stats){
//     console.log(path);
//     console.log();
//     console.log(stats);
//     console.log();

//     if (stats.isFile()){
//         console.log('    file');
//     }
//     if (stats.isDirectory()){
//         console.log('    directory');
//     }

//     console.log('    size: ' + stats["size"]);
//     console.log('    mode: ' + stats["mode"]);
//     console.log('    others eXecute: ' + (stats["mode"] & 1 ? 'x' : '-'));
//     console.log('    others Write:   ' + (stats["mode"] & 2 ? 'w' : '-'));
//     console.log('    others Read:    ' + (stats["mode"] & 4 ? 'r' : '-'));
 
//     console.log('    group eXecute:  ' + (stats["mode"] & 10 ? 'x' : '-'));
//     console.log('    group Write:    ' + (stats["mode"] & 20 ? 'w' : '-'));
//     console.log('    group Read:     ' + (stats["mode"] & 40 ? 'r' : '-'));
 
//     console.log('    owner eXecute:  ' + (stats["mode"] & 100 ? 'x' : '-'));
//     console.log('    owner Write:    ' + (stats["mode"] & 200 ? 'w' : '-'));
//     console.log('    owner Read:     ' + (stats["mode"] & 400 ? 'r' : '-'));
 
 
//     console.log('    file:           ' + (stats["mode"] & 0100000 ? 'f' : '-'));
//     console.log('    directory:      ' + (stats["mode"] & 0040000 ? 'd' : '-'));
// })

///// exitting code //////////////////////////
// process.exit(-1);

///// command line args //////////////////////////
// console.log(process.argv);

// if (process.argv.length <= 2){
//     console.log("usage: " + __filename + " SOME_PARAM");
//     process.exit(-1);
// }

// var param = process.argv[2];

// console.log('param: ' + param);

///// read file async //////////////////////////
// var fs = require('fs');

// fs.readFile("DATA", 'utf8', function(err, contents){
//     console.log(contents);
// });

// console.log('after calling readFile');

///// read file sync //////////////////////////
// var fs = require('fs');

// var contents = fs.readFileSync('DATA', 'utf8');
// console.log(contents);
// console.log('after calling readFile');

///// web server //////////////////////////
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