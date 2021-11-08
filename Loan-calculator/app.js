// seleccionar los inputs
const cantidadPrestada = document.querySelector('#cantidadPrestada');
const porcentaje = document.querySelector('#porcentaje');
const cantidadAños = document.querySelector('#cantidadAños');
const pagoMensual = document.querySelector('#pagoMensual');
const pagoTotal = document.querySelector('#pagoTotal');
const interesTotal = document.querySelector('#interesTotal');

const insertBoxes = document.querySelectorAll('.insertBox input');

const insertContainer = document.querySelector('.insertContainer');
const resultContainer = document.querySelector('.resultContainer');


insertBoxes.forEach((input)=>{
    input.addEventListener('focus',(e)=>{
        e.target.style.background = "inherit";
    });
});

// cantidadPrestada.addEventListener('focus',(e)=>{console.log(e);});


console.dir(insertBoxes);
console.log(porcentaje);
console.log(cantidadAños);
console.log(submitBtn);

//al clickar el boton, coger valores de los inputs hacer calculo
insertContainer.addEventListener("submit",(e)=>{

    console.log("calculando");

    document.querySelector('.imgLoader').style.display = "block";

    setTimeout(()=>{
        calcularResultados();
    },2000);
    
    e.preventDefault();
});


//Hacer los calculos y sacar en pantalla
function calcularResultados(){
    console.log('dentro');

    
  

    const principal = parseFloat(cantidadPrestada.value);
    const calculatedInterest = parseFloat(porcentaje.value) / 100 / 12;
    const calculatedPayments = parseFloat(cantidadAños.value) * 12;
  
    // Calculos 
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);
    // console.log(monthly);
    // console.log(x);

    // Hide loader
    document.querySelector('.imgLoader').style.display = 'none';
  
    if(isFinite(monthly)) {
        console.log("dentro del if");
        pagoMensual.value = monthly.toFixed(2);
        pagoTotal.value = (monthly * calculatedPayments).toFixed(2);
        interesTotal.value = ((monthly * calculatedPayments)-principal).toFixed(2);
  
      // Show results
      resultContainer.style.display = 'flex';
  
    }else{
        //si falta algun campo mensaje de error
        mostrarError();
    }

}

function mostrarError(){
    console.log("mostrando error");
    let mensajeError = document.createElement('div');
    mensajeError.textContent = "Completa los campos vacios";
    mensajeError.classList.add("errorMsg");
    
    let masterContainer = document.querySelector('.masterContainer'); 
    masterContainer.insertBefore(mensajeError, insertContainer);

    insertBoxes.forEach((input)=>{
        if(input.value == '') {
            input.style.background = "#EA0808";
        }
    });

    // setTimeout(()=>{
    //     insertBoxes.forEach((input)=>{
    //         if(input.value == '') {
    //             input.style.background = "inherit";
    //         }
    //     });
    // },5000);
    

    setTimeout(()=>{
        mensajeError.remove();
    },2000);
}

