var dict = { 	"cars": 
[
    {
        "Image": "prius",
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
        "Year": "1999",
        "Make": "Toyota",
        "Model": "Camry",
        "Milage": "300,000",
        "Transmission": "Auto",
        "Cylinders": "4",
        "Price": "950"
    },
    {
        "Image": "civic",
        "Year": "2006",
        "Make": "Honda",
        "Model": "Civic Coupe",
        "Milage": "160,000",
        "Transmission": "Auto",
        "Cylinders": "4",
        "Price": "3200"
    }
]
}


function fillTables(fname){
    $.getJSON(fname+'.json', function(jd) {
        processJSON(jd.cars);
    });
}

function processJSON(jd){
    var tables = ['car-table-large','car-table-small'];
    for (tname of tables){
        var tbody = document.getElementsByClassName(tname)[0].children[1];
        for (car of jd){
            tr = tbody.insertRow();
            for (col in car){
                var info = car[col]
                td = tr.insertCell();
                if (col != 'Image'){
                    info = (col != 'Price') ? info : '$' + info;
                    td.innerHTML = info;
                }
                else if (info != 'civic'){
                    img = document.createElement("img");
                    img.setAttribute('onclick', 'openModal();currentSlide(1);');
                    img.className += ' hover-shadow';
                    img.className += ' table-thumbnails';
                    img.src = "img/cars/" + info + " thumb.jpg";
                    td.appendChild(img);
                }
            }
        }
    }
}

// fillTables('cars');
processJSON(dict.cars);