const allOptions = document.querySelectorAll('.option');

allOptions.forEach(option =>{
   option.addEventListener('click',() =>{
      option.classList.toggle('active');
      realityControl();
   });
});

function realityControl(){
   if (allOptions[0].classList.contains('active') && allOptions[1].classList.contains('active') ) {
      allOptions[2].classList.remove('active')
   }
   if (allOptions[1].classList.contains('active') && allOptions[2].classList.contains('active') ) {
      allOptions[0].classList.remove('active')
   }
   if (allOptions[2].classList.contains('active') && allOptions[0].classList.contains('active') ) {
      allOptions[1].classList.remove('active')
   }
}