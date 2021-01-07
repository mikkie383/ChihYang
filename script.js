const year = document.querySelector('.year');
const time = document.querySelector('.date');

const date = new Date();

year.textContent = date.getFullYear();
time.innerHTML = `Last Updated: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;