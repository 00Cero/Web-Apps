const sounds = document.querySelectorAll('audio');





function getAudioNames(){
   let allNames = [];
   sounds.forEach(audio =>{
      let source = audio.getAttribute('src');
      let puntoIdx = source.indexOf('.');
      let barraIdx = source.indexOf('/');
      let audioId = source.slice(barraIdx +1 , puntoIdx);
      audio.id = audioId;
      allNames.push(audioId);
      
   });
   
   return allNames;
}

let allAudioNames = getAudioNames();

allAudioNames.forEach(audioName => {

   let btn = document.createElement('button');
   btn.id = audioName;
   btn.innerHTML = audioName.toUpperCase();
   btn.classList.add('audioContainer');

   btn.addEventListener('click', ()=>{
      stopSound();
      document.querySelector(`#${audioName}`).play();
   });

   document.body.appendChild(btn);
});

function stopSound (){
   sounds.forEach(sound =>{
      sound.pause();
      sound.currentTime = 0;
   });
}


