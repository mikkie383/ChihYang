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
//lazy loading
/*let imagesToLoad = document.querySelectorAll('[data-src]');
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

//Round Slider Value
var slider = document.getElementById("Range");
var output = document.getElementById("value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}*/
//Hero images
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activate", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activate";
}

//pull twon data from json
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        
        let card = document.createElement('section');
        let data = document.createElement('div');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let image = document.createElement('img');
        

        if(towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs"){
            h2.textContent = towns[i].name;
            p1.textContent = towns[i].motto;
            p2.textContent = "Tear Founded: " + towns[i].yearFounded;
            p3.textContent = "Population: " + towns[i].currentPopulation;
            p4.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            image.setAttribute('src', 'images/' + towns[i].photo);
            image.setAttribute('alt', towns[i].name);
            data.setAttribute('class', 'data');
            p1.setAttribute('class', 'p1');
            p2.setAttribute('class', 'p2');
        
            data.appendChild(h2);
            data.appendChild(p1);
            data.appendChild(p2);
            data.appendChild(p3);
            data.appendChild(p4);
            card.appendChild(data)
            card.appendChild(image);

            document.querySelector('div.towns-info').appendChild(card);
        }
        
        
    }

  });