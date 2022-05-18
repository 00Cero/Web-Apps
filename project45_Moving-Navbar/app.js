

const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');
const masterNavbar = document.querySelector('.masterNavbar'); 



openBtn.addEventListener('click',()=>{
   masterNavbar.classList.add('active');
});
closeBtn.addEventListener('click',()=>{
   masterNavbar.classList.remove('active');
});