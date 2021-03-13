//  Меню

const leftMenu = document.querySelector(".left-menu");
const hamburger = document.querySelector(".hamburger");
const tvCardImg = document.querySelector(".tv-card__img");

hamburger.addEventListener("click", () => {
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');

});

document.body.addEventListener("click", event => {
    if(!event.target.closest(".left-menu")){
        leftMenu.classList.remove('openMenu');
        hamburger.classList.remove('open');
    }
});

leftMenu.addEventListener("click", event => {
    const target = event.target;
    const dropdown = target.closest(".dropdown");
     if(dropdown){
        dropdown.classList.toggle("active");
        leftMenu.classList.add('openMenu');
        hamburger.classList.add('open');


    }
});

tvCardImg.addEventListener("click", event => {
    alert("Dwawd");    
    event.target.style.backgroundImages = ("https://image.tmdb.org/t/p/w185_and_h278_bestv2/AdJgkXb8oLI8e4rsk8XzkvABIuw.jpg");
});




