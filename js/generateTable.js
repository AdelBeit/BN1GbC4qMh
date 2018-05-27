var dict = 
{ 	"cars": 
    [
        {
            "Image": "prius",
            "OtherImages": [
                
            ],
            "Specs":{
                "Year": "2006",
                "Make": "Toyota",
                "Model": "Prius",
                "Milage": "135,000",
                "Transmission": "Auto",
                "Cylinders": "4"
            },
            "Price": "$6750",
            "Sold": true
        },
        {
            "Image":"accord",
            "OtherImages": [
                
            ],
            "Specs":{
                "Year": "2004",
                "Make": "Honda",
                "Model": "Accord",
                "Milage": "175,000",
                "Transmission": "Auto",
                "Cylinders": "6"
            },
            "Price": "$2500",
            "Sold": true
        },
        {
            "Image":"audi",
            "OtherImages": [
                
            ],
            "Specs":{
                "Year": "2005",
                "Make": "Audi",
                "Model": "A6 Quattro",
                "Milage": "79,000",
                "Transmission": "Auto",
                "Cylinders": "6"
            },
            "Price": "$8500",
            "Sold": false
        }
    ]
}


function fillTables(fname){
    $.getJSON('/json/'+fname+'.json', function(jsonData) {
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
            // make a new col 
            td = tr.insertCell();
            // image col
            img = document.createElement("img");
            img.setAttribute('onclick', `openModal();currentSlide(${i});`);
            img.className += ' hover-shadow';
            img.className += ' table-thumbnails';
            img.src = "img/cars/" + car.Image + " thumb.jpg";
            td.appendChild(img);
            // make each col in each row
            for (col in car.Specs){
                var info = car.Specs[col];
                td = tr.insertCell();
                td.innerHTML = info;
            }
            td = tr.insertCell();
            if (car.Sold) td.innerHTML = "<span class='soldPrice'>"+car.Price+"</span><span class='soldText'>Sold!</span>";
            else td.innerHTML = car.Price;
            i++;
            // make an empty row for small table
            if (tname == 'car-table-small') td = tr.insertCell();
        }
        // remove the last empty row 
        if (tname == 'car-table-small') lastrow.deleteCell(8);
    }
}

fillTables('cars');
// processJSON(dict.cars);