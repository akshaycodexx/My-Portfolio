let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let section=document.querySelectorAll('section');
let navLink=document.querySelectorAll('header nav a');


window.onscroll =()=>{

    section.forEach(sec =>{
    let top=window.scrollY;
    let offset= sec.offsetTop-150;
    let height =sec.offsetHeight;
    let id =sec.getAttribute('id');
    if(top>=offset && top<offset +height){
        navLink.forEach(Links =>{
            Links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id + ']').classList.add('active')

        });
    }

    });

};
// ===============nav






// ==============sticky nav bar

let header=document.querySelector('header');
header.classList.toggle('sticky', window.scrollY>100)


// ==========================

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


// ========scroll revel
ScrollReveal({
    //  reset: true,
     distance:'80px',
     duration: 2000,
     delay :200

});

ScrollReveal().reveal('.home-contect,.heading', { origin:'top'});
ScrollReveal().reveal('.home-contect h1,.about-img', { origin:' left'});
ScrollReveal().reveal('.home-contect p,.about-contant', { origin:' right'});



