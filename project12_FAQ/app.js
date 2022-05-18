

//al button cuando clicke que si esta en active se le quite y sino lo esta que se ponga

const allBtns = document.querySelectorAll('button');

allBtns.forEach(btn => {
   btn.addEventListener('click',()=>{
      btn.parentElement.classList.toggle('active');
      
   });
});