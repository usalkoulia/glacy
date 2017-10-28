var basket_button = document.querySelector(".basket");
var basket_form = document.querySelector(".basket-modal");

basket_button.addEventListener("click", function () {
  basket_button.classList.toggle("active-modal");
  basket_form.classList.toggle("basket-active");
})

basket_form.addEventListener("click", function(evt) {
  evt.stopPropagation();
});
