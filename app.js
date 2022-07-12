const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu while scrolling
function highlightMenu(){
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const workMenu = document.querySelector('#work-page');
    const educationMenu = document.querySelector('#education-page');

    const homeSection = document.querySelector('#home');
    const workSection = document.querySelector('#work');
    const educationSection = document.querySelector('#education');

    // adds 'highlight' class to my menu items
     if (window.innerWidth > 960 && isOnScreen(homeSection)){
        homeMenu.classList.add('highlight');
        workMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && isOnScreen(workSection)){
        workMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        educationMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && isOnScreen(educationSection)){
        educationMenu.classList.add('highlight');
        workMenu.classList.remove('highlight');
        return;
    }

    if(window.innerWidth < 960 && elem){
        elem.classList.remove('highlight');
    }
}

function isOnScreen(element) {
    var top_of_element = element.offsetTop;
    var bottom_of_element = element.offsetTop + element.offsetHeight + element.style.marginTop;
    var bottom_of_screen = window.scrollY + window.innerHeight;
    var top_of_screen = window.scrollY;


    return (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element);
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
function hideMobileMenu(){
    const menuBars = document.querySelector('.is-active');
    if (menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
    }
  };
  
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);