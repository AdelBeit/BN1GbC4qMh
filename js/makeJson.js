var fs = require('fs');
var dir = require('node-dir');
var nPath = require('path');

var print = args => console.log(args);

String.prototype.toForwardSlash = function() {
    return this.replace(/\\/g,"/");
};

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

// make the car json 
var carDict = [];
for (i = 0; i < carlist.length; i++){
    var car = carlist[i];
    var fullPath = path+car;
    // get path of all files for a given car
    var files = dir.files(fullPath,{sync:true});
    // get info.json path for file
    var carInfoPath = String(files.filter(e => e.includes('json')));
    carInfoPath = nPath.parse(carInfoPath);
    carInfoPath = nPath.join(carInfoPath.dir, carInfoPath.name);
    carInfoPath = carInfoPath.toForwardSlash();
    var carInfo = require(carInfoPath);

    files = files.map(e => e.toForwardSlash());
    files = files.map(s => s = s.substring(3,s.length));
    var thumbnail = String(files.filter(e => e.includes('thumb')));
    var otherImgs = files.filter(e => !e.includes('json'));
    var newCar = {
        "Thumb": thumbnail,
        "OtherImages":otherImgs,
        "Specs":{
            "Year": carInfo.Year,
            "Make": carInfo.Make,
            "Model": carInfo.Model,
            "Milage": carInfo.Milage,
            "Transmission": carInfo.Transmission,
            "Cylinders": carInfo.Cylinders
        },
        "Price": carInfo.Price,
        "Sold": carInfo.Sold
    };
    
    // some cars are to be ignored
    if(!carInfo.Ignore) carDict.push(newCar);
}

// print(carDict);

// export cars to json file
var carsInfoPath = "../img/cars 2/info.json";
fs.writeFileSync(carsInfoPath, JSON.stringify(carDict, null, "\t"));

readme = fs.readFileSync(carsInfoPath, "utf8");
// print(readme);










// for (i = 0; i < files.length; i++){
//     var file = files[i];
//     file = file.substring(2,file.length);
//     files[i] = file;
//     print(file);
// }




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

