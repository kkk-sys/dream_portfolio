
'use strict';


const nabvar = document.querySelector('#navbar');
const navbarHeight = nabvar.getBoundingClientRect().height;
// wrong. getboundingclientrect. element 특성 가져오기

document.addEventListener('scroll',() => {
    if(window.scrollY>navbarHeight * 1.5){
        nabvar.classList.add('navbar--dark') ;   //wrong. class 추가
        // nabvar.style.opacity = 0.8;
        // nabvar.style.backgroundColor = '#73aace';
    }
    else{
        // nabvar.style.opacity = 1;
        // nabvar.style.backgroundColor = 'transparent';
        navbar.classList.remove('navbar--dark');
    }
})

