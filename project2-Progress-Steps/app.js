
//al clickar cuanlquiera de los botones
   //**llevar un contador para saber en que step estamos */
   //mover la barra progress bar
   //colorear o descolorear el border de los pasos -quitar poner class= btnActive


const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const progressBar = document.querySelector('.progressBar');
const progressBoxes = document.querySelectorAll('.progressBox');
// console.log(progressBoxes);

let actualStep = 1;






prevBtn.addEventListener('click', ()=>{
   
   if (actualStep === 1) {
      actualStep = 1;
      
   }else{
      console.log("dentro");
      
      actualStep--;
   }

   btnControl();

   moveProgressBar();

   activeSteps();
})


nextBtn.addEventListener('click', ()=>{
   
   if (actualStep === progressBoxes.length) {
      actualStep = 4;
      
   }else{
      
      actualStep++;
   }

   btnControl();

   moveProgressBar();

   activeSteps();
})

function activeSteps(){
   progressBoxes.forEach((box,index) =>{
      
      if (index < actualStep) {
         box.classList.add('boxActive');
      }else{
         box.classList.remove('boxActive');
      }
   });
}






function moveProgressBar(){

   let increment = ((actualStep -1) / (progressBoxes.length - 1)) * 100 + "%";

   progressBar.style.width = increment;
}

function btnControl () {
   if (actualStep === 1) {
      prevBtn.disabled = true;
   }else if (actualStep === 4){
      nextBtn.disabled = true;
   }else{
      prevBtn.disabled = false;
      nextBtn.disabled = false;
   }
}


