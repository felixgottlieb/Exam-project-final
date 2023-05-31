var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-7vh";
  }
  prevScrollpos = currentScrollPos;
}


const menuButton = document.querySelector("#openmenu");
const closeButton = document.querySelector("#closemenu");

const openChoice = document.querySelector("#openchoice");
const openedChoice = document.querySelector("#openedchoice");

const openLang = document.querySelector("#openlang");
const openedLang = document.querySelector("#openedlang");


const plusSign = document.querySelector(".plussign");
const minusSign = document.querySelector(".minussign");

const arrowText = document.querySelector("#text-cuh");


const youtubeCont = document.querySelector("#youtubecont");
const instagramCont = document.querySelector("#instagramcont");
const emailCont = document.querySelector("#emailcont");



arrowText.addEventListener("mouseover", () => {
    document.querySelector("#arrowcuh").classList.add("opacity-up");
  
  
  });
  
  arrowText.addEventListener("mouseout", () => {
    document.querySelector("#arrowcuh").classList.remove("opacity-up");

    document.querySelector("#arrowcuh").classList.add("opacity-down");
  
  
  });

menuButton.addEventListener("click", () => {
  document.querySelector("#navbar-closed").classList.add("sm:hidden");
  
  document.querySelector("#navbar-opened").classList.remove("hidden");
  document.querySelector("#navbar-opened").classList.add("slide-in-top");

});

closeButton.addEventListener("click", () => {
  document.querySelector("#navbar-opened").classList.add("hidden");
  
  document.querySelector("#navbar-closed").classList.remove("sm:hidden");
});




openLang.addEventListener("mouseover", () => {
  document.querySelector("#openedlang").classList.toggle("hidden");


});

openLang.addEventListener("mouseout", () => {
  document.querySelector("#openedlang").classList.toggle("hidden");


});



instagramCont.addEventListener("mouseover", () => {
    document.querySelector("#instagram").classList.toggle("hidden");
    document.querySelector("#instagram2").classList.toggle("hidden");
  
  });
  
  instagramCont.addEventListener("mouseout", () => {
    document.querySelector("#instagram").classList.toggle("hidden");
    document.querySelector("#instagram2").classList.toggle("hidden");
  
  });
  
  youtubeCont.addEventListener("mouseover", () => {
    document.querySelector("#youtube").classList.toggle("hidden");
    document.querySelector("#youtube2").classList.toggle("hidden");
  
  });
  
  youtubeCont.addEventListener("mouseout", () => {
    document.querySelector("#youtube").classList.toggle("hidden");
    document.querySelector("#youtube2").classList.toggle("hidden");
  
  });
  
  emailCont.addEventListener("mouseover", () => {
    document.querySelector("#email").classList.toggle("hidden");
    document.querySelector("#email2").classList.toggle("hidden");
  
  });
  
  emailCont.addEventListener("mouseout", () => {
    document.querySelector("#email").classList.toggle("hidden");
    document.querySelector("#email2").classList.toggle("hidden");
  
  });