const agujaHoras = document.querySelector('.agujaHoras');
const agujaMinutos = document.querySelector('.agujaMinutos');
const agujaSegundos = document.querySelector('.agujaSegundos');
const digitalClock = document.querySelector('.digitalClock');

const minSecDeg = 6;
const hourDeg = 15;

// console.log(agujaSegundos);


setInterval(() => {
   
   const actualTime = new Date();
   // console.log(actualTime.getSeconds());
   // console.log(actualTime.getMinutes());
   console.log(actualTime.getHours());
   updateClock(actualTime.getHours(),actualTime.getMinutes(),actualTime.getSeconds());
}, 1000);


function updateClock(hour,min,sec){
   agujaSegundos.style.transform = `rotate(${sec*minSecDeg + 180}deg)`; 
   agujaMinutos.style.transform = `rotate(${min*minSecDeg + 180}deg)`; 
   agujaHoras.style.transform = `rotate(${hour*hourDeg + 180}deg)`; 
   digitalClock.innerHTML = `${hour.toString().padStart(2,'0')}: ${min.toString().padStart(2,'0')}: ${sec.toString().padStart(2,'0')}`;
}
