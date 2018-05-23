var dict = 
{ 	"cars": 
    [
        {
            "Image": "prius",
            "OtherImages": [
                
            ],
            "Year": "2006",
            "Make": "Toyota",
            "Model": "Prius",
            "Milage": "135,000",
            "Transmission": "Auto",
            "Cylinders": "4",
            "Price": "SOLD!"
        },
        {
            "Image":"accord",
            "OtherImages": [

            ],
            "Year": "2004",
            "Make": "Honda",
            "Model": "Accord",
            "Milage": "175,000",
            "Transmission": "Auto",
            "Cylinders": "6",
            "Price": "SOLD!" 
        },
        {
            "Image":"audi",
            "OtherImages": [

            ],
            "Year": "2005",
            "Make": "Audi",
            "Model": "A6 Quattro",
            "Milage": "79,000",
            "Transmission": "Auto",
            "Cylinders": "6",
            "Price": "$11000" 
        },
        {
            "Image": "camry",
            "OtherImages": [

            ],
            "Year": "1999",
            "Make": "Toyota",
            "Model": "Camry",
            "Milage": "300,000",
            "Transmission": "Auto",
            "Cylinders": "4",
            "Price": "SOLD!"
        }
        // },
        // {
        //     "Image": "civic",
        //     "OtherImages": [

        //     ],
        //     "Year": "2006",
        //     "Make": "Honda",
        //     "Model": "Civic Coupe",
        //     "Milage": "160,000",
        //     "Transmission": "Auto",
        //     "Cylinders": "4",
        //     "Price": "3200"
        // }
    ]
}


const fs = require('fs');
var dir = require('node-dir');
var carsjson = require('../img/cars 2/prius/info.json')
var direct = "./img/cars 2/prius/";
console.log(carsjson.cars[0].Image);
///////// read
var readme = fs.readFileSync(direct+"info.json", "utf8");

///////// modify
var newcar = {
    "Image": "prius",
    "OtherImages": [
        
    ],
    "Year": "1111111111111",
    "Make": "Toyota",
    "Model": "Prius",
    "Milage": "135,000",
    "Transmission": "Auto",
    "Cylinders": "4",
    "Price": "$10000000"
};

carsjson.cars.push(newcar);
console.log(JSON.stringify(carsjson.cars, null, "\t"));

///////// write
fs.writeFileSync(direct+"info.json", JSON.stringify(dict, null, "\t"));


readme = fs.readFileSync(direct+"info.json", "utf8");
// console.log(readme);