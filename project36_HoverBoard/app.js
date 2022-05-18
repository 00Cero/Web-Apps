
const colors = [
   "#FF6633",
   "#FFB399",
   "#FF33FF",
   "#FFFF99",
   "#00B3E6",
   "#E6B333",
   "#3366E6",
   "#999966",
   "#809980",
   "#E6FF80",
   "#1AFF33",
   "#999933",
   "#FF3380",
   "#CCCC00",
   "#66E64D",
   "#4D80CC",
   "#FF4D4D",
   "#99E6E6",
   "#6666FF"
];

const hoverboard = document.querySelector('.hoverboard');

const boxNumber = 1023;

for (let i = 0; i < boxNumber; i++) {
   let box = document.createElement('div');
   box.classList.add('box');
   box.addEventListener('mouseover', doFantasy);
   // box.addEventListener('mouseleave', ()=>{
   //    box.classList.remove('active');   
   // });
   hoverboard.appendChild(box);
   
}

function doFantasy(){
   this.classList.add('active');
   let randomIdx = Math.floor(Math.random()* colors.length);
   this.style.backgroundColor = colors[randomIdx];
   setTimeout(() => {
      this.classList.remove('active');
      this.style.backgroundColor = "#1d1d1d";
   }, 1000);
}

