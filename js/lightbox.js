var modalOpen = false;
var currentModal;

// Open the Modal
function openModal(carLightbox) {
  modalOpen = true;
  document.getElementById('lightBoxModal').style.display = "block";
  document.body.style.overflow = "hidden";
  document.getElementById("mainNav").style.display = "none";
  $(".table-large")[0].style.overflow = "hidden";
  currentModal = carLightbox;
  document.getElementById(currentModal).style.display = "block";
}

// Close the Modal
function closeModal() {
  modalOpen = false;
  document.getElementById('lightBoxModal').style.display = "none";
  document.body.style.overflow = "auto";
  document.getElementById("mainNav").style.display = "initial";
  $(".table-large")[0].style.overflow = "auto";
  // hide last open carmodal
  document.getElementById(currentModal).style.display = "none";
}

// var slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function print(args) {
  console.log(args);
}

function showSlides(n) {

  var i;
  var curr_modal = document.getElementById(currentModal);
  var curr_imgs = curr_modal.getElementsByClassName("slideImgs")[0].children;
  var curr_slide = curr_modal.getElementsByClassName('slide')[0];
  var curr_thumbs = curr_modal.getElementsByClassName("thumbnails");

  if (n > curr_imgs.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = curr_imgs.length
  }

  // hide all slides and thumbnails
  for (i = 0; i < curr_thumbs.length; i++) {
    curr_thumbs[i].className = curr_thumbs[i].className.replace(" active", "");
  }
  // show current slide
  curr_slide.children[0].src = curr_imgs[slideIndex - 1].src;
  // curr_slide.children[0].style.display = "block";
  curr_thumbs[slideIndex - 1].className += " active";
}

// close modal if it's open 
// check for clicks outside image
$("#lightBoxModal").on("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});
// escape is pressed
$(document).on("keydown", function (e) {
  switch (e.keyCode) {
    case 27: // esc
      closeModal();
      break;
    case 37: // left
      plusSlides(-1);
      break;
    case 39: // right
      plusSlides(1);
      break;
    default:
  }

});