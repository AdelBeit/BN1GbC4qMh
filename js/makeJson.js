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

const fs = require('fs');
var dir = require('node-dir');
var direct = "./img/cars 2/";

//////// get list of files 

fs.readdirSync(direct).forEach(file => {
    console.log(file);
})


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

