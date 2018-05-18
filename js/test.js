var fs = require('fs');

// fs.unlink('writeMe.txt');

// fs.readFile('./img/cars/prius/info.txt','utf8', function(err,data){
//     fs.writeFile('writeMe.txt', data);
// });

// console.log('test');

// fs.writeFile('readMe.txt','you cant read!');

// fs.mkdirSync('stuff');

// fs.mkdir('stuff',function(){
//     fs.readFile('readMe.txt','utf8', function(err,data){
//         fs.writeFile('./stuff/writeMe.txt', data);
//     });

// });

fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff');
});