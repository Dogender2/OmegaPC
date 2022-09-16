//Animacje Scroll-a
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky1", window.scrollY > 900);

    
    var com2 = document.querySelector(".comunicat4");
    com2.classList.toggle("fadeIn", window.scrollY > 700);
})





//Autoscroll
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}