const year = document.querySelector('.year');
const time = document.querySelector('.date');

const date = new Date();

year.textContent = date.getFullYear();
time.innerHTML = `Last Updated: ${document.lastModified}`;

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