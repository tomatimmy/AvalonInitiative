let hasScrolled = false;
const navbar = document.getElementById('navbar');
const originalBackgroundColor = navbar.style.backgroundColor;
const tituloUno = document.getElementById('tituloUno');
const parrafoUno = document.getElementById('parrafoUno');
const avalonInitiative = document.getElementById('avalonInitiative');
const imagenUno = document.getElementById('imagenUno');
const tituloPrincipios = document.getElementById('tituloPrincipios');
const imagenPrincipios = document.getElementById('imagenPrincipios');
const parrafoPrincipios = document.getElementById('parrafoPrincipios');
const parrafoPrincipiosDos = document.getElementById('parrafoPrincipiosDos');
const tituloInvest = document.getElementById('tituloInvest');
const parrafoInvest = document.getElementById('parrafoInvest');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const ctaInvest = document.getElementById('ctaInvest');

window.addEventListener('scroll', function() {
  if (!hasScrolled) {
    hasScrolled = true;
    navbar.style.backgroundColor = 'rgba(0,0,0,0.2)';
  }
  
  if (window.scrollY === 0) {
    hasScrolled = false;
    navbar.style.backgroundColor = originalBackgroundColor;
  }
});

// Add a scroll event listener to the window object
window.addEventListener('scroll', function() {

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    console.log('Scroll position:', scrollTop);
    
    if (scrollTop > 150) {
        tituloUno.style.color = 'rgb(46, 46, 46)';
        imagenUno.style.opacity = '100';
    } else {
        tituloUno.style.color = 'rgb(255, 255, 255)';
        imagenUno.style.opacity = '0';
    }
    
    if (scrollTop > 320) {
        parrafoUno.style.color = 'rgb(46, 46, 46)';
    } else {
        parrafoUno.style.color = 'rgb(255, 255, 255)';
    }
    
    if (scrollTop > 400) {
        avalonInitiative.style.color = 'rgb(46, 46, 46)';
        avalonInitiative.style.border = 'solid 1px black';
    } else {
        avalonInitiative.style.color = 'rgb(255, 255, 255)';
        avalonInitiative.style.border = 'solid 1px white';
   
    } 
});

window.addEventListener('scroll', function() {

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 684) {
        tituloInvest.style.opacity = '100';
    } else {
        tituloInvest.style.opacity = '0';
    }
    
    if (scrollTop > 747) {
        parrafoInvest.style.opacity = '100';
    } else {
        parrafoInvest.style.opacity = '0';
    }
    
    if (scrollTop > 1057) {
        link1.style.opacity = '100';
    } else {
        link1.style.opacity = '0';
    } 

    if (scrollTop > 1083) {
        link2.style.opacity = '100';
    } else {
        link2.style.opacity = '0';
    } 

    if (scrollTop > 1112) {
        link3.style.opacity = '100';
    } else {
        link3.style.opacity = '0';
    }
    
    if (scrollTop > 1170) {
        ctaInvest.style.opacity = '100';
    } else {    
        ctaInvest.style.opacity = '0';
    } 
});