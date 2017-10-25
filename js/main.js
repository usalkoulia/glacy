var slide_button1 = document.querySelector("#button-slide-1");
var slide_button2 = document.querySelector("#button-slide-2");
var slide_button3 = document.querySelector("#button-slide-3");
var body = document.querySelector("body");
var slide_text1 = document.querySelector(".slide-1.main-slider-slide");
var slide_text2 = document.querySelector(".slide-2.main-slider-slide");
var slide_text3 = document.querySelector(".slide-3.main-slider-slide");

slide_button1.addEventListener("click", function() {
  // управление сменой фона и картинки
  body.classList.add("slide-1");
  body.classList.remove("slide-2");
  body.classList.remove("slide-3");

  // управление состоянием кнопки
  slide_button1.classList.add("active");
  slide_button2.classList.remove("active");
  slide_button3.classList.remove("active");

  // управление текстом слайдера
  slide_text1.classList.add("slide-active");
  slide_text2.classList.remove("slide-active");
  slide_text3.classList.remove("slide-active");
});

slide_button2.addEventListener("click", function() {
  body.classList.add("slide-2");
  body.classList.remove("slide-1");
  body.classList.remove("slide-3");

  slide_button1.classList.remove("active");
  slide_button2.classList.add("active");
  slide_button3.classList.remove("active");

  slide_text1.classList.remove("slide-active");
  slide_text2.classList.add("slide-active");
  slide_text3.classList.remove("slide-active");
});

slide_button3.addEventListener("click", function() {
  body.classList.add("slide-3");
  body.classList.remove("slide-1");
  body.classList.remove("slide-2");

  slide_button1.classList.remove("active");
  slide_button2.classList.remove("active");
  slide_button3.classList.add("active");

  slide_text1.classList.remove("slide-active");
  slide_text2.classList.remove("slide-active");
  slide_text3.classList.add("slide-active");
});
