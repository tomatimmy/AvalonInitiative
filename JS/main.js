const navbar = document.getElementById('navbar');


// Add a scroll event listener to the window object
window.addEventListener('scroll', function() {

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    console.log('Scroll position:', scrollTop);
    
    if (scrollTop > 1) {
        navbar.style.backgroundColor = 'rgba(0,0,0,0.2)';
    } else {
        navbar.style.backgroundColor = 'rgba(0,0,0,0.0)';
    }
});