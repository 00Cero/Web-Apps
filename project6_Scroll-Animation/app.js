
const boxes = document.querySelectorAll('.box');
// const referenceRow = document.querySelector('.referenceRow');

window.addEventListener('scroll', ()=>{

   //0.8 es el % desde el bottom donde quiero que sea el punto de inflexion, osea al 80%;
   let heightPoint = window.innerHeight * 0.8;

   for(let box of boxes){
      if (box.getBoundingClientRect().top <= heightPoint) {
         console.log("dentro");
         box.classList.add('active');
      }else{
         box.classList.remove('active');
      }
   }
   //coger el punto de infelxion del window donde sucede la animacion
   //coger la medida de los boxes si estan por encima meterles el active class, si no quitarle
});





