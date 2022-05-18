
const allBoxes = document.querySelectorAll('.masterContainer .box');

// console.log(allBoxes);

function addActive(element){
   element.classList.add('activeBox');
   element.classList.remove('noActive');
   const infoBox = element.querySelector('.infoBox');
   infoBox.classList.add('infoBoxActive');
   console.log("added");
}

function removeActive(arrayIn){
   arrayIn.forEach(element =>{

      element.classList.remove('activeBox');
      element.classList.add('noActive');
      element.querySelector('.infoBox').classList.remove('infoBoxActive');
   });
};

allBoxes.forEach(box =>{
   box.addEventListener('click', (e)=>{
      
      removeActive(allBoxes);
      console.dir(e.target);
      addActive(box);
      
   });
});