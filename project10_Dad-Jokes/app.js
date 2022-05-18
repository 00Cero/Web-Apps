async function getJokes (){

   let get = await fetch('https://icanhazdadjoke.com/application/json');

   
   console.log(get);
}

getJokes();