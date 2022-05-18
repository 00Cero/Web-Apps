
const boxesContainer = document.querySelector('.boxesContainer'); 
const changeBtn = document.querySelector('.changeBtn');

changeBtn.addEventListener('click', ()=> boxesContainer.classList.toggle('expanded'));

(function setImgBoxes(){
   //i for the columns
   for (let i = 0; i < 4; i++) {
      //t for the rows
      for (let t = 0; t < 4; t++) {
         box = document.createElement('div');
         box.classList.add('box');
         box.style.backgroundPosition = `${t * -100}px ${i * -100}px`;
         boxesContainer.appendChild(box);  
      }
   }
})();

// setImgBoxes();