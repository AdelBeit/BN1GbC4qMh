const fs = require('fs');
var dir = require('node-dir');


// fs = dir.files("./img/cars/", function(err, files) {
//   if (err) throw err;
//   console.log(files);
//   return files;
// });

// console.log(fs);

fs.open("./img/cars/prius/info.txt",'w', fetchInfo);



function fetchInfo(err,filedata) {
    if (err) throw err;

    console.log(filedata);
    var k = {'ok':23,'whatnow':44};
    fs.appendFile(filedata, k, 'utf8', (err) => {
        
        fs.close(filedata, (err) => {
            if (err) throw err;
        });
        if (err) throw err;
    });
}

// console.log(fs.readdirSync('c:'));

var fpaths = dir.files("./img/cars/", {sync:true});
console.log(fpaths);
