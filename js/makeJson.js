const fs = require('fs');
var dir = require('node-dir');

var direct = "./img/cars 2/prius/";

// fs = dir.files("./img/cars/", function(err, files) {
//   if (err) throw err;
//   console.log(files);
//   return files;
// });

// console.log(fs);

// write to files
// fs.open("./img/cars 2/prius/info.txt",'w', fetchInfo);

// function fetchInfo(err,filedata) {
//     if (err) throw err;

//     // console.log(filedata);
//     var k = {'ok':23,'whatnow':44};
//     fs.appendFile(filedata, k, 'utf8', (err) => {
        
//         fs.close(filedata, (err) => {
//             if (err) throw err;
//         });
//         if (err) throw err;
//     });
// }

// console.log(fs.readdirSync('c:'));

// var fpaths = dir.files("./img/cars 2/", {sync:true});
// console.log(fpaths);


// read and write

///////// read
var readme = fs.readFileSync(direct+"info.txt", "utf8");
console.log(readme);


///////// write
