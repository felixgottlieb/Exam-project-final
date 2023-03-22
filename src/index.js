const contactHeading = document.querySelector("#contact");
const contactOpen = document.querySelector("#contactopen");

const arrow = document.querySelector("#point1");

contactHeading.addEventListener("mouseover", () => {
  document.querySelector("#contactopen").classList.remove("hidden");
  document.querySelector("#contacthover").classList.add("hidden");


});


contactHeading.addEventListener("mouseout", () => {
  document.querySelector("#contactopen").classList.add("hidden");
  document.querySelector("#contacthover").classList.remove("hidden");


});

contactHeading.addEventListener("mouseover", () => {
  document.querySelector("#point1").classList.add("rotate-r");

});