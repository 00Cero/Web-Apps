
const smallGlasses = document.querySelectorAll('.small-glass');
const waterInfo = document.querySelector('.big-glass p:first-of-type');



let capacity = 2000;
let updateCant = capacity/smallGlasses.length;
let counterGlass = 0;
let waterLvl = 0;

waterInfo.innerHTML = capacity/1000 + "L";

smallGlasses.forEach(glass=>{
   glass.addEventListener('click', ()=>{
      let sum;
      glass.classList.toggle('active');
      if (glass.classList.contains('active')) {
         sum = true;
         counterGlass = counterGlass + 1;
         capacity = capacity - updateCant;
         
         
      }else{
         sum = false;
         counterGlass = counterGlass -1;
         capacity = capacity + updateCant;
      }
      console.log(counterGlass);
      
      updateUI(sum);
      
   
   });
});




function updateUI(operation){

   
   const bigGlass = document.querySelector('.big-glass');
   const water = document.querySelector('.water');
   const oneMeasure = bigGlass.clientHeight / 8;
   
   if (operation) {
      waterLvl = waterLvl + oneMeasure;
      
   }else{
      waterLvl = waterLvl - oneMeasure;
   }
   waterInfo.innerHTML = capacity/1000 + "L";
   water.style.height = waterLvl + "px"; 

}



