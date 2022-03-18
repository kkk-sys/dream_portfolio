
'use strict';


const nabvar = document.querySelector('#navbar');
const navbarHeight = nabvar.getBoundingClientRect().height;
// wrong. getboundingclientrect. element 특성 가져오기

const home = document.querySelector('#home');

const aboutTop = document.querySelector('#about').getBoundingClientRect().top;

const arrow = document.querySelector('#arrowup');

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

    //home 내리면 투명하게
    if(window.scrollY<aboutTop){
        let opacity_ratio = (aboutTop - window.scrollY) / aboutTop * 1.3;
        // console.log(opacity_ratio);
        home.style.opacity = opacity_ratio;

        arrow.classList.remove('arrow--on');
    }
    else{
        arrow.classList.add('arrow--on');
    }

arrow.addEventListener('click',() => {
    document.querySelector('#home').scrollIntoView({behavior:"smooth"});
})
})


const navbar__menu = document.querySelector('.navbar__menu');
navbar__menu.addEventListener('click', () => {
    if(event.target.tagName == 'LI'){
        console.log(event.target.innerHTML);
        let menu = event.target.innerHTML;

        switch(menu){

            case 'home':
                document.querySelector('#home').scrollIntoView({behavior:"smooth"});
                break;

            case 'about':
                document.querySelector('#about').scrollIntoView({behavior:"smooth"});
                break;

            case 'skills':
                document.querySelector('#skills').scrollIntoView({behavior:"smooth"});
                break;

            case 'my work':
                document.querySelector('#work').scrollIntoView({behavior:"smooth"});
                break;

            case 'testimonial':
                document.querySelector('#testimonials').scrollIntoView({behavior:"smooth"});
                break;

            case 'contact':
                document.querySelector('#contact').scrollIntoView({behavior:"smooth"});
                break;


        }
    }
})

//  wrong. data-link를 정의하는 방식으로함
// const navbar__menu = document.querySelector('.navbar__menu');
// navbar__menu.addEventListener('click',(event) => {
//     const target = event.target;
//     const link = target.dataset.link;
//     if (link == null){
//         return;
//     }
//     const scrollto = document.querySelector(link);
//     scrollto.scrollIntoView({behavior:"smooth"});
// })

const home__contact = document.querySelector('.home__contact');
home__contact.addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({behavior:"smooth"});
})


//wrong. category 버튼 방법. smooth가 안됨
// const work__cartegories = document.querySelector('.work__cartegories');
// work__cartegories.addEventListener('click' , () => {
//     if(event.target.tagName != 'BUTTON'){
//         return;
//     }
//     let chain = event.target.classList[1];
//     console.log(chain);

//     let nfts = document.querySelectorAll('.project');
//     console.log(nfts);

//     switch(chain){

//         case 'all':
//             nfts.forEach((element) => {
//                 element.classList.remove('nft-remove');
//             })
//             break;

//         case 'eth':
//             nfts.forEach((element) => {
//                 if(element.classList[1] != 'eth'){
//                     element.classList.add('nft-remove');
//                 }
//                 else{
//                     element.classList.remove('nft-remove');
//                 }
//             })
//             break;

//         case 'klay':
//             nfts.forEach((element) => {
//                 if(element.classList[1] != 'klay'){
//                     element.classList.add('nft-remove');
//                 }
//                 else{
//                     element.classList.remove('nft-remove');
//                 }
//             })
//             break;

//         case 'polygon':
//             nfts.forEach((element) => {
//                 if(element.classList[1] != 'polygon'){
//                     element.classList.add('nft-remove');
//                 }
//                 else{
//                     element.classList.remove('nft-remove');
//                 }
//             })
//             break;
//     }
// })

const workBtnContainer = document.querySelector('.work__cartegories');
const nftContainer = document.querySelector('.work__projects');
const nfts = document.querySelectorAll('.project');

// wrong. debug이용하기 
workBtnContainer.addEventListener('click' , (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }

    nftContainer.classList.add('anime-out');
    
    setTimeout(() => {
        nfts.forEach((nft) => {
            if(filter === 'all' || filter === nft.dataset.type){
                nft.classList.remove('invisible');
            } else{
                nft.classList.add('invisible');
            }
    });
        nftContainer.classList.remove('anime-out');
}, 500);

    console.log(filter);

})

