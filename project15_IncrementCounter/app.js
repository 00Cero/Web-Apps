
const socialNumbers = document.querySelectorAll('.socialNumbers');

//poner un 0 e ir hasta el numero target

socialNumbers.forEach((element,idx) =>{

   let counter = 0;
   
   let limit;
   /**Limites para cada social**/
   if (idx === 0) {
      limit = 11235;
   }
   if (idx === 1) {
      limit = 12300;
   }
   if (idx === 2) {
      limit = 11111;
   }

   //variable para la velocidad del timer
   let timerTempo = 5;
   let timer = setInterval(() => {

      element.innerHTML = counter;

      //cuando se acerca al valor target, bajar la velocidad del timer y el incremento sea menor
      if (counter > limit *0.99) {
         counter = counter + 1;
         timerTempo = 50;
      }else{
         //valor aleatorio ya que si pongo 100 por ejemplo se vera muchos 0 y no parece que este cambiando tanto
         counter = counter + 165;
      }
      //parar el timer
      if (counter > limit) {
         clearInterval(timer);
      }

   }, timerTempo);
});