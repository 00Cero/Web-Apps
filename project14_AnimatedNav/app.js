
const navbarBtn = document.querySelector('.navbarBtn');

navbarBtn.addEventListener('click', ()=>{
   const navbar = document.querySelector('.navbar');

   navbar.classList.toggle('active');
});