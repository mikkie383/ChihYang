WebFont.load({google: {families: ["Acme", "Open Sans"]}});

const year = document.querySelector('.year');
const time = document.querySelector('.date');
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const date = new Date();

year.textContent = date.getFullYear();
time.innerHTML = `Last Updated: ${date.toLocaleDateString("en-AU", options)}`;

const hamButton = document.querySelector('.ham');
const mainMenu = document.querySelector('.navigation');
const pancake = document.getElementById('pancake');

hamButton.addEventListener('click', () =>{
    mainMenu.classList.toggle('responsive')
}, false);

window.onresize = () => {
    if(window.innerWidth > 760){
        
        mainMenu.classList.remove('responsive');
        
    }
};

if(date.getDay() == 5){
    pancake.style.display = "block";
}