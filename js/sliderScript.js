let sliderIndex = 1;

function showSlider(n) {
  const slides = document.getElementsByClassName("section1__inner");
  const dots = document.getElementsByClassName("section1__scroll-svg");
  if (n > slides.length) {
    sliderIndex = 1;
  }
  if (n < 1) {
    sliderIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].children[i].classList.remove("active");
  }
  slides[sliderIndex-1].style.display= "block";
  dots[sliderIndex-1].children[sliderIndex-1].classList.add("active");
  const currentSlide = slides[sliderIndex - 1];
  if (currentSlide) {
    currentSlide.style.display = "block";
  }
}

showSlider(sliderIndex);

function plusSlides(n) {
  showSlider(sliderIndex += n);
}

function currentSlides(n){
  showSlider(sliderIndex = n);
}

