var dict = [
	{
		"Thumb": "img/cars 2/accord/thumb.jpg",
		"OtherImages": [
			"img/cars 2/accord/accord (2).jpg",
			"img/cars 2/accord/accord (4).jpg",
			"img/cars 2/accord/accord.jpg",
			"img/cars 2/accord/thumb.jpg"
		],
		"Specs": {
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
		"Thumb": "img/cars 2/audi/thumb.jpg",
		"OtherImages": [
			"img/cars 2/audi/audi (2).jpg",
			"img/cars 2/audi/audi (3).jpg",
			"img/cars 2/audi/audi (4).jpg",
			"img/cars 2/audi/thumb.jpg"
		],
		"Specs": {
			"Year": "2005",
			"Make": "Audi",
			"Model": "A6 Quattro",
			"Milage": "79,000",
			"Transmission": "Auto",
			"Cylinders": "6"
		},
		"Price": "$8500",
		"Sold": false
	},
	{
		"Thumb": "img/cars 2/prius/thumb.jpg",
		"OtherImages": [
			"img/cars 2/prius/prius (2).jpg",
			"img/cars 2/prius/prius (4).jpg",
			"img/cars 2/prius/prius.jpg",
			"img/cars 2/prius/thumb.jpg"
		],
		"Specs": {
			"Year": "2006",
			"Make": "Toyota",
			"Model": "Prius",
			"Milage": "135,000",
			"Transmission": "Auto",
			"Cylinders": "4"
		},
		"Price": "$6750",
		"Sold": true
	}
]


function fillTables(fname){
    var path ='/json/'+fname+'.json'; 
    path ='/img/cars 2/'+fname+'.json'; 
    $.getJSON(path, function(jsonData) {
        processJSON(jsonData);
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
            // img.src = "img/cars/" + car.Image + " thumb.jpg";
            img.src = car.Thumb;
            td.appendChild(img);
            // make each col in each row
            for (col in car.Specs){
                var info = car.Specs[col];
                td = tr.insertCell();
                td.innerHTML = info;
            }
            td = tr.insertCell();
            if (car.Sold) td.innerHTML = "<span class='soldPrice'>"+car.Price+"</span><span class='soldText'> Sold!</span>";
            else td.innerHTML = car.Price;
            i++;
            // make an empty row for small table
            if (tname == 'car-table-small') td = tr.insertCell();
        }
        // remove the last empty row 
        // if (tname == 'car-table-small') lastrow.deleteCell(8);
    }
}

// fillTables('cars');
// fillTables('info');


// processJSON(dict.cars);
processJSON(dict);