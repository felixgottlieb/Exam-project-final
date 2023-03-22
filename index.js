const $4fa36e821943b400$var$contactHeading = document.querySelector("#contact");
const $4fa36e821943b400$var$contactOpen = document.querySelector("#contactopen");
const $4fa36e821943b400$var$arrow = document.querySelector("#point1");
$4fa36e821943b400$var$contactHeading.addEventListener("mouseover", ()=>{
    document.querySelector("#contactopen").classList.remove("hidden");
    document.querySelector("#contacthover").classList.add("hidden");
});
$4fa36e821943b400$var$contactHeading.addEventListener("mouseout", ()=>{
    document.querySelector("#contactopen").classList.add("hidden");
    document.querySelector("#contacthover").classList.remove("hidden");
});
$4fa36e821943b400$var$contactHeading.addEventListener("mouseover", ()=>{
    document.querySelector("#point1").classList.add("rotate-r");
});


//# sourceMappingURL=index.js.map
