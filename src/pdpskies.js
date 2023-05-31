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

const openDesc = document.querySelector("#opendesc");
const openedDesc = document.querySelector("#openeddesc");


const openCont = document.querySelector("#opencont");
const openedCont = document.querySelector("#openedcont");

const openSpec = document.querySelector("#openspec");
const openedSpec = document.querySelector("#openedspec");

const openShip = document.querySelector("#openship");
const openedShip = document.querySelector("#openedship");


const openPay = document.querySelector("#openpay");
const openedPay = document.querySelector("#openedpay");

const openLang = document.querySelector("#openlang");
const openedLang = document.querySelector("#openedlang");


const plusSign = document.querySelector(".plussign");
const minusSign = document.querySelector(".minussign");

const arrowSwitch1 = document.querySelector("#arrow1");
const arrowSwitch2 = document.querySelector("#arrow2");
const lenghtSwitch1 = document.querySelector("#lenght1");
const lenghtSwitch2 = document.querySelector("#lenght2");


const arrowText = document.querySelector("#text-cuh");

const youtubeCont = document.querySelector("#youtubecont");
const instagramCont = document.querySelector("#instagramcont");
const emailCont = document.querySelector("#emailcont");



menuButton.addEventListener("click", () => {
  document.querySelector("#navbar-closed").classList.add("sm:hidden");
  
  document.querySelector("#navbar-opened").classList.remove("hidden");
  document.querySelector("#navbar-opened").classList.add("slide-in-top");

});

closeButton.addEventListener("click", () => {
    
  document.querySelector("#navbar-opened").classList.add("hidden");
  
  
  document.querySelector("#navbar-closed").classList.remove("sm:hidden");
});

openChoice.addEventListener("click", () => {
  document.querySelector("#openedchoice").classList.toggle("hidden");
  document.querySelector("#lenght1").classList.toggle("hidden");
  document.querySelector("#lenght2").classList.toggle("hidden");

  document.querySelector("#arrow1").classList.toggle("hidden");
  document.querySelector("#arrow2").classList.toggle("hidden");


});

openDesc.addEventListener("click", () => {
  document.querySelector("#openeddesc").classList.toggle("hidden");
  document.querySelector(".plussign").classList.toggle("hidden");
  document.querySelector(".minussign").classList.toggle("hidden");

});

openPay.addEventListener("click", () => {
    document.querySelector("#openedpay").classList.toggle("hidden");
    document.querySelector(".plussign").classList.toggle("hidden");
    document.querySelector(".minussign").classList.toggle("hidden");
  
  });

openCont.addEventListener("click", () => {
  document.querySelector("#openedcont").classList.toggle("hidden");
  document.querySelector(".plussign").classList.toggle("hidden");
  document.querySelector(".minussign").classList.toggle("hidden");

});

openShip.addEventListener("click", () => {
    document.querySelector("#openedship").classList.toggle("hidden");
    document.querySelector(".plussign").classList.toggle("hidden");
    document.querySelector(".minussign").classList.toggle("hidden");
  
  });

openSpec.addEventListener("click", () => {
    document.querySelector("#openedspec").classList.toggle("hidden");
    document.querySelector(".plussign").classList.toggle("hidden");
    document.querySelector(".minussign").classList.toggle("hidden");
  
  });
  

openLang.addEventListener("mouseover", () => {
  document.querySelector("#openedlang").classList.toggle("hidden");


});

openLang.addEventListener("mouseout", () => {
  document.querySelector("#openedlang").classList.toggle("hidden");


});


arrowText.addEventListener("mouseover", () => {
  document.querySelector("#arrowcuh").classList.add("opacity-up");


});

arrowText.addEventListener("mouseout", () => {
  document.querySelector("#arrowcuh").classList.remove("opacity-up");


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
  