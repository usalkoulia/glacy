var slide_button1 = document.querySelector("#button-slide-1");
var slide_button2 = document.querySelector("#button-slide-2");
var slide_button3 = document.querySelector("#button-slide-3");
var body = document.querySelector("body");
var slide_text1 = document.querySelector(".slide-1.main-slider-slide");
var slide_text2 = document.querySelector(".slide-2.main-slider-slide");
var slide_text3 = document.querySelector(".slide-3.main-slider-slide");
var catalog_link = document.querySelector("#main-menu-catalog");
var catalog = document.querySelector(".catalog");
var search_link = document.querySelector(".search-icon");
var search_form = document.querySelector(".main-form.search-form");
var authorization_link = document.querySelector(".authorization-link");
var authorization_form = document.querySelector(".main-form.authorization");
var feedback_button = document.querySelector("#feedback-button");
var feedback_container = document.querySelector(".feedback-modal-container");
var feedback_close_button = document.querySelector(".feedback-modal-button");
var feedback_form = document.querySelector(".feedback-modal");

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

catalog_link.addEventListener("click", function () {
  catalog_link.classList.toggle("active-modal");
  catalog.classList.toggle("catalog-active");
});

search_link.addEventListener("click", function () {
  search_link.classList.toggle("active-modal");
  search_form.classList.toggle("search-active");
});

authorization_link.addEventListener("click", function () {
  authorization_link.classList.toggle("active-modal");
  authorization_form.classList.toggle("authorization-active");
});

authorization_form.addEventListener("click", function(evt) {
  evt.stopPropagation();
});

search_form.addEventListener("click", function(evt) {
  evt.stopPropagation();
});

feedback_button.addEventListener("click", function () {
  feedback_container.classList.add("feedback-active");
})

feedback_close_button.addEventListener("click", function () {
  feedback_container.classList.remove("feedback-active");
})

feedback_container.addEventListener("click", function () {
  feedback_container.classList.remove("feedback-active");
})

feedback_form.addEventListener("click", function(evt) {
  evt.stopPropagation();
});
