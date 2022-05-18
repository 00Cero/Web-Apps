
const randomBtn = document.querySelector('#randomBtn');
const textarea = document.querySelector('#insertArea');
const resultContainer = document.querySelector('.resultContainer');

const playAgainBtn = document.querySelector('#playAgainBtn');

//cuando clicke el boton de otra tirada
playAgainBtn.addEventListener('click', resetLayout);

//al clickar el boton de randomizar
randomBtn.addEventListener('click', ()=> {
   
   if (textarea.value.trim() === "") {
      //mensaje de insertar algo
   }else{

      //limpiar el resultContainer
      resultContainer.innerHTML = '';
      //mostrar el resultContainer
      resultContainer.style.display = 'flex';

      //funcion para trabajar con los valores insertados
      convertToBoxes(textarea.value);
      
      //funcion para elegir un valor aleatorio
      getRandomBox();
   }
});


function convertToBoxes (variables){

   //si el usuario mete espacios de mas al princio o al final los elimino
   let workingVars = variables.trim();

   //separo las opciones por espacios
      //el filter esta por si el usuario separa por mas de un espacio
      //map covierte cada elemento del array en element HTML
   let boxes = workingVars.split(' ').filter(element => element !== "").map(variable => `<div class="resultBox">${variable}</div>`);

   //agregar cada opcion al contenedor de resultados
   boxes.forEach(box => {
      resultContainer.innerHTML += box;
   });
}

function getRandomBox(){
   
   //seleccionar todos los resultados 
   const allBoxes = document.querySelectorAll('.resultBox');
   
   //crear la variable para el numero random
   let randomIdx;
   //animacion y funcionalidad de elegir un resultado aleatorio
   let randomAnimation = setInterval(() => {
      //valor aleatorio
      randomIdx = Math.floor(Math.random() * allBoxes.length);
      //poner los valores de estilo predeterminados en cada resultado 
      for(let box of allBoxes){
         box.style.backgroundColor = "";
         box.style.color = "";
      }
      //la funcionalidad de cambiar de colores
      allBoxes[randomIdx].style.backgroundColor = "var(--tea-green)";
      allBoxes[randomIdx].style.color = "#000";

   }, 150);
   
   //determinar el tiempo de eleccion
   let animationTiming = setTimeout(() => {
      //para la animacion y elegir el ganador
      clearInterval(randomAnimation);
      //mostrar boton para volver a "jugar" 
      playAgainBtn.style.display = 'block';
      //reset el timeOut 
      clearInterval(animationTiming);
      //funcion para señalar al ganador y darle animacion
      showWinner(randomIdx, allBoxes);
   }, 3000);
   
}
//funcion para el efecto de glowing
function showWinner(index, results){
   results[index].classList.add('winner');
}

//funcion al clickar el boton de jugar de nuevo
function resetLayout(){
   //vaciar el resultContainer
   resultContainer.innerHTML = '';
   //esconder el resultContainer
   resultContainer.style.display = 'none';
   //limpiar el textarea
   textarea.value = '';
   //poner el focus en el textarea
   textarea.focus();
   //esconder el boton de jugar de nuevo
   playAgainBtn.style.display ='none';

}


