var dict = [{
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

function fillTables(fname) {
	var path = '/json/' + fname + '.json';
	path = '/img/cars 2/' + fname + '.json';
	$.getJSON(path, function (jsonData) {
		processJSON(jsonData);
	});
}

// use the json dict to make two car tables
function processJSON(jsonData) {
	var tables = ['car-table-large', 'car-table-small'];
	for (tname of tables) {
		var tbody = document.getElementsByClassName(tname)[0].children[1];
		// var lastrow;
		var thumbImg;
		for (car of jsonData) {
			tr = tbody.insertRow();
			// lastrow = tr;
			// make a new col 
			td = tr.insertCell();
			// image col
			thumbImg = newElement('img');
			thumbImg.setAttribute('onclick', `openModal('${car.Specs.Make + car.Specs.Model + car.Specs.Year}');currentSlide(1);`);
			thumbImg.className += ' hover-shadow';
			thumbImg.className += ' table-thumbnails';
			// thumbImg.src = "img/cars/" + car.Image + " thumb.jpg";
			thumbImg.src = car.Thumb;
			td.appendChild(thumbImg);
			// make each col in each row
			for (col in car.Specs) {
				var spec = car.Specs[col];
				td = tr.insertCell();
				td.innerHTML = spec;
			}
			td = tr.insertCell();
			if (car.Sold) td.innerHTML = `<span class='soldPrice'>${car.Price}</span><span class='soldText'> Sold!</span>`;
			else td.innerHTML = car.Price;
			i++;
			// make an empty row for small table
			if (tname == 'car-table-small') td = tr.insertCell();
		}
	}

	// generate the lightbox
	var lightboxDiv = document.getElementById("lightBoxModal");
	for (car of jsonData) {
		var modalDiv = newElement('div');
		modalDiv.id = car.Specs.Make + car.Specs.Model + car.Specs.Year;
		modalDiv.className = "modal-content";
		var i = 1;
		// add current slide div
		var currentSlideDiv = newElement('div');
		currentSlideDiv.className = 'slide';
		var currentSlideImg = newElement('img');
		currentSlideImg.className = 'slideImg';
		currentSlideDiv.appendChild(currentSlideImg);
		// next and prev buttons
		var prevButton = newElement('a');
		var nextButton = newElement('a');
		prevButton.className += 'prev';
		nextButton.className += 'next';
		prevButton.setAttribute('onclick','plusSlides(-1)');
		nextButton.setAttribute('onclick','plusSlides(1)');
		prevButton.innerHTML = "&#10094";
		nextButton.innerHTML = "&#10095;";
		currentSlideDiv.appendChild(prevButton);
		currentSlideDiv.appendChild(nextButton);
		modalDiv.appendChild(currentSlideDiv);
		// slides and thumbnails
		var slideDiv = newElement('div');
		slideDiv.className = "slideImgs";
		var thumbDiv = newElement('div');
		thumbDiv.className = 'thumbnails-container';
		for (img in car.OtherImages) {
			// slide pics
			var slideImg = newElement('img');
			slideImg.src = car.OtherImages[img];
			slideDiv.appendChild(slideImg);
			// thumb pics
			var thumbImg = newElement('img');
			thumbImg.src = car.OtherImages[img];
			thumbImg.className = "thumbnails";
			thumbImg.setAttribute('onclick', `currentSlide(${i})`);
			var thumbCol = newElement('div');
			thumbCol.className = 'column';
			thumbCol.appendChild(thumbImg);
			thumbDiv.appendChild(thumbCol);
			i++;
		}
		modalDiv.appendChild(slideDiv);
		// gap between pic and thumbs
		var gapDiv = newElement('div');
		gapDiv.className = 'gap';
		gapDiv.appendChild(newElement('p'));
		modalDiv.appendChild(gapDiv);
		// thumbnails
		modalDiv.appendChild(thumbDiv);
		lightboxDiv.appendChild(modalDiv);
	}

}

// type less
function newElement(element,parent=document){
	return parent.createElement(element);
}

// fillTables('cars');
// fillTables('info');


// processJSON(dict.cars);
processJSON(dict);

// "Thumb": "img/cars 2/accord/thumb.jpg",
// 		"OtherImages": [
// 			"img/cars 2/accord/accord (2).jpg",
// 			"img/cars 2/accord/accord (4).jpg",
// 			"img/cars 2/accord/accord.jpg",
// 			"img/cars 2/accord/thumb.jpg"
// 		],
// 		"Specs": {
// 			"Year": "2004",
// 			"Make": "Honda",
// 			"Model": "Accord",
// 			"Milage": "175,000",
// 			"Transmission": "Auto",
// 			"Cylinders": "6"
// 		},
// 		"Price": "$2500",
// 		"Sold": true