
const leftBtn = document.querySelector('.leftArrow');
const rightBtn = document.querySelector('.rightArrow');
const sliders = document.querySelectorAll('.sliderImg');


let currentImg = 0;

leftBtn.addEventListener('click', ()=>{
   
   currentImg--;

   //condicional para que muestre las imagenes en bucle
      //cuando llega a la primera empieza desde la ultima
   if (currentImg < 0) {
      currentImg = sliders.length -1;
   }

   setBg();
   changeActive();
   

});
rightBtn.addEventListener('click', ()=>{

   currentImg++;
   //condicional para que muestre las imagenes en bucle
      //cuando llega a la ultima empieza de nuevo
   if (currentImg > sliders.length -1) {
      currentImg = 0;
   }

   setBg();
   changeActive();

});

window.addEventListener('DOMContentLoaded',()=>{
   setBg();

   
});


function changeActive(){
   sliders.forEach(slide =>{
      slide.classList.remove('active');
   });

   sliders[currentImg].classList.add('active');
}

function setBg(){ 
   const masterContainer = document.querySelector('.masterContainer');
   masterContainer.style.backgroundImage = sliders[currentImg].style.backgroundImage;
}



