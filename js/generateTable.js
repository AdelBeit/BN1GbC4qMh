var dict = { 	"cars": 
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
        "Price": "6750"
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
        "Price": "2500" 
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
        "Price": "11000" 
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
        "Price": "950"
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


function fillTables(fname){
    $.getJSON(fname+'.json', function(jsonData) {
        processJSON(jsonData.cars);
    });
}

// use the json dict to make two car tables
function processJSON(jsonData){
    var tables = ['car-table-large','car-table-small'];
    for (tname of tables){
        var tbody = document.getElementsByClassName(tname)[0].children[1];
        var lastrow;
        var i = 1;
        for (car of jsonData){
            tr = tbody.insertRow();
            lastrow = tr;
            // make each col in each row
            for (col in car){
                var info = car[col];
                // make a new col 
                if (col != "OtherImages") td = tr.insertCell();
                // make the cols for everything other than an image
                if (col != 'Image' && col != "OtherImages"){
                    info = (col != 'Price') ? info : '$' + info;
                    td.innerHTML = info;
                }
                // make each image and insert into column
                else if (info != 'civic' && col != "OtherImages"){                    
                    img = document.createElement("img");
                    img.setAttribute('onclick', `openModal();currentSlide(${i});`);
                    img.className += ' hover-shadow';
                    img.className += ' table-thumbnails';
                    img.src = "img/cars/" + info + " thumb.jpg";
                    td.appendChild(img);
                }
            }
            i++;
            // make an empty row for small table
            if (tname == 'car-table-small') td = tr.insertCell();
        }
        // remove the last empty row 
        if (tname == 'car-table-small') lastrow.deleteCell(8);
    }
}

// fillTables('cars');
processJSON(dict.cars);