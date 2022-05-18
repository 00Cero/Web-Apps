

const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const masterContainer = document.querySelector('.masterContainer');

openBtn.addEventListener('click',showNavbar);
closeBtn.addEventListener('click',showNavbar);


function showNavbar(){
   masterContainer.classList.toggle('navActive');
}