var fs = require('fs');
var dir = require('node-dir');

// printing function
var print = function(args){
    console.log(args);
}

// are there args?
if (process.argv.length <= 2){
    console.log("Usage: " + __filename + " path/to");
    process.exit(-1);
}

// get path from args
var path = '.';
path = process.argv[2];

// get list of cars
var carlist = fs.readdirSync(path);


carlist = carlist.filter(e => !e.includes('.json'));

print(carlist);
// console.log(dirlist);

for (i = 0; i < carlist.length; i++){
    var p2 = path+carlist[i];
    print(p2);
    var files = dir.files(p2,{sync:true});
    print(files);
}



// console.log('files');
// console.log(files);










// const fs = require('fs');
// var dir = require('node-dir');

// var direct = "./img/cars 2/prius/";

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

// const fs = require('fs');
// var dir = require('node-dir');
// var direct = "./img/cars 2/";

//////// get list of files 

// fs.readdirSync(direct).forEach(file => {
//     console.log(file);
// })


// // ///////// read
// var carsjson = require('../img/cars 2/prius/info.json')
// // var readme = fs.readFileSync(direct+"info.json", "utf8");

// ///////// modify
// var newcar = {
//     "Image": "prius",
//     "OtherImages": [
        
//     ],
//     "Year": "1111111111111",
//     "Make": "Toyota",
//     "Model": "Prius",
//     "Milage": "135,000",
//     "Transmission": "Auto",
//     "Cylinders": "4",
//     "Price": "$10000000"
// };

// carsjson.cars.push(newcar);

// // console.log(JSON.stringify(carsjson.cars, null, "\t"));

// ///////// write
// fs.writeFileSync("./cars.json", JSON.stringify(carsjson, null, "\t"));

// readme = fs.readFileSync("./cars.json", "utf8");
// console.log(readme);

