var modalOpen = false;

// Open the Modal
function openModal() {
  modalOpen = true;
  document.getElementById('lightBoxModal').style.display = "block";
  document.body.style.overflow = "hidden";
  document.getElementById("mainNav").style.display = "none";
  $(".table-large")[0].style.overflow = "hidden";
}

// Close the Modal
function closeModal() {
  modalOpen = false;
  document.getElementById('lightBoxModal').style.display = "none";
  document.body.style.overflow = "auto";
  document.getElementById("mainNav").style.display = "initial";
  $(".table-large")[0].style.overflow = "auto";
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

function print(args){
  console.log(args);
}

function showSlides(n) {
  
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var curr_slide = document.getElementsByClassName('current-slide')[0];
  print(slideIndex-1);
  print(slides.length);
  // var dots = document.getElementsByClassName("thumbnails");
  // var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  print(slideIndex-1);
  print(slides.length);
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  // slides[slideIndex-1].style.display = "block";
  curr_slide.style.display = "block";
  cur = slides[0];
  cur = slides[slideIndex-1];
  print(cur);
  curr_slide.children[0].src = slides[slideIndex-1].children[0].src;

}

// close modal if it's open 
// check for clicks outside image
$("#lightBoxModal").on("click",function(e){
    if (e.target === this){
        closeModal();
    }
});
// escape is pressed
$(document).on("keydown",function(e){
  switch(e.keyCode){
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
