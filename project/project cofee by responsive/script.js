const menu = document.querySelector('.nav-bar');
const hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', ()=>{
     menu.classList.toggle('active');
})

function rem(){
    menu.classList.remove('active');
}