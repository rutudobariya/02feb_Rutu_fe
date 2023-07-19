const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-bar');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const services = document.querySelector('#services');
const contact = document.querySelector('#contact');
const projectt = document.querySelector('#projecttt');
let main_header = document.querySelector('.main-header');
let menu_link = document.querySelector('.menu-link');


function remove(){
    hamburger.classList.remove('active');
    menu.classList.remove('active');
}

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
})

home.addEventListener('click', ()=>{
    remove();
})
about.addEventListener('click', ()=>{
    remove();
})
contact.addEventListener('click', ()=>{
    remove();
})
services.addEventListener('click', ()=>{
    remove();
})
projectt.addEventListener('click', ()=>{
    remove();
})

window.addEventListener('scroll',()=>{
    var scrollPosition = window.scrollY;

    if (scrollPosition > 70) {
        main_header.style.backgroundColor = "rgb(42 178 221)";
    }
    else{
        main_header.style.backgroundColor = "#ffffff00";
    }
})

function scroll1(){
    let container1 = document.querySelector('#main_header');
    container1.scrollIntoView({behavior:"smooth"});
}

function scroll2(){
    let container2 = document.querySelector('.about');
    container2.scrollIntoView({behavior:"smooth"});
}

function scroll3(){
    let container3 = document.querySelector('#service');
    container3.scrollIntoView({behavior:"smooth"});
}
function scroll4(){
    let container4 = document.querySelector('#project');
    container4.scrollIntoView({behavior:"smooth"});
}
function scroll5(){
    let container5 = document.querySelector('#contact-page');
    container5.scrollIntoView({behavior:"smooth"});
}