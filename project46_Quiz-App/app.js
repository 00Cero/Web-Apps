
const quizData =[
   {question: "Cual es la pregunta 1 que nos acontece de prueba?",a: "Javascript 1",
   b: "pepe",
   c: "pepe2",
   d: "pepe3",
   correct: "a"
},
   {question: "Cual es la pregunta 2 que nos acontece de prueba?",a: "Javascript 2",
   b: "pepe",
   c: "pepe2",
   d: "pepe3",
   correct: "c"
},
   {question: "Cual es la pregunta 3 que nos acontece de prueba?",a: "Javascript 3",
   b: "pepe",
   c: "pepe2",
   d: "pepe3",
   correct: "b"
},
   {question: "Cual es la pregunta 4 que nos acontece de prueba?",a: "Javascript 4",
   b: "pepe",
   c: "pepe2",
   d: "pepe3",
   correct: "d"
},
   {question: "Cual es la pregunta 5 que nos acontece de prueba?",a: "Javascript 5",
   b: "pepe",
   c: "pepe2",
   d: "pepe3",
   correct: "d"
}
];

const allInputs = document.querySelectorAll('.resultRow input');
const question = document.querySelector('.question');
const allAnswers = document.querySelectorAll('.answer');
const submitBtn = document.querySelector('.submitBtn');

let currentQuestion = 0;
let points = 0;

submitBtn.addEventListener('click', changeQuestion);



function showResult(){

   let queastionCard = document.querySelector('.questionCard').innerHTML = `<h2>Has acertado un total de ${points}/${quizData.length} ${points >2 ? 'eres un megapro' :'eres un puto inutil'}</h2>
   <button class="submitBtn" onclick="location.reload();">Again</button>
   `;
   console.log(queastionCard);
   
}



function writeUI(){
   question.innerHTML = quizData[currentQuestion].question;

   allAnswers[0].innerHTML = quizData[currentQuestion].a;
   allAnswers[1].innerHTML = quizData[currentQuestion].b;
   allAnswers[2].innerHTML = quizData[currentQuestion].c;
   allAnswers[3].innerHTML = quizData[currentQuestion].d;
}

function checkAnswer(){
   allInputs.forEach(input => {
      if (input.checked) {
         if (input.value === quizData[currentQuestion].correct) {
            points = points + 1;
         }
      }
   });
   
}

function cleanCheckbox(){
   allInputs.forEach(input => {
      input.checked = false;
   });
}


function changeQuestion(){
   if (currentQuestion < quizData.length -1) {
   
      checkAnswer();
      cleanCheckbox();
      currentQuestion = currentQuestion + 1;
      writeUI();
   }else{
      
      showResult(); 
      currentQuestion = 0;
      points = 0;
   }

}

window.addEventListener('DOMContentLoaded',()=>{
   cleanCheckbox();
   writeUI();
});




