
const playContainer = document.querySelector('.playContainer');
const xboxContainer = document.querySelector('.xboxContainer');
const allContainer = document.querySelectorAll('.masterContainer > div');
console.log(allContainer);


playContainer.addEventListener('mouseenter',()=>{
   
   playContainer.style.width = 75 + "%";
   xboxContainer.style.width = 25 + "%";
   
   // xboxContainer.classList.remove('growy');
});


xboxContainer.addEventListener('mouseenter',()=>{
   // startConfig();
   
   
   playContainer.style.width = 25 + "%";
   xboxContainer.style.width = 75 + "%";

   // playContainer.classList.remove('growy');
});

