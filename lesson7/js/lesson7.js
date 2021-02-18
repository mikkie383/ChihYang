WebFont.load({google: {families: ["Acme", "Open Sans"]}});

const year = document.querySelector('.year');
const time = document.querySelector('.date');
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const date = new Date();

year.textContent = date.getFullYear();
time.innerHTML = `Last Updated: ${date.toLocaleDateString("en-AU", options)}`;

const hamButton = document.querySelector('.ham');
const mainMenu = document.querySelector('.navigation');

hamButton.addEventListener('click', () =>{
    mainMenu.classList.toggle('responsive')
}, false);

window.onresize = () => {
    if(window.innerWidth > 760){
        
        mainMenu.classList.remove('responsive');
        
    }
};

let imagesToLoad = document.querySelectorAll('[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
