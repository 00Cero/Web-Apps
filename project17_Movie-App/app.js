const url_general = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=40d492f4cc3c08091c16a096fdf90fe0&page=1';

const url_search = 'https://api.themoviedb.org/3/search/movie?api_key=40d492f4cc3c08091c16a096fdf90fe0&query=';

const url_img = 'https://image.tmdb.org/t/p/w500/';

const form = document.querySelector('#form');



async function getMovies(url){
   let response = await fetch(url);

   let data = await response.json();

   console.log(data.results);

   return data.results;
}

function paintUI (arrData) {

   const masterContainer = document.querySelector('.masterContainer'); 

   masterContainer.innerHTML = '';

   for (const movie of arrData) {
      
      //destructuring
      let {title, backdrop_path, overview, vote_average} = movie;
   
      const movieCard = document.createElement('div');
      movieCard.classList.add('movieCard');
      
      movieCard.innerHTML = `
         <div class="imgContainer">
            <img src="${url_img + backdrop_path}" alt="">
         </div>
         <div class="ratingBox">${vote_average}</div>
         <div class="desContainer">${title}</div>
      `;
   
      masterContainer.appendChild(movieCard);
   }

}

form.addEventListener('submit',(e)=>{

   const search = document.querySelector('#search');

   const submitedValue = search.value;

   search.value = '';

   getMovies(url_search + submitedValue)
   .then(paintUI);

   e.preventDefault();
});


window.addEventListener('DOMContentLoaded', ()=>{
   getMovies(url_general).then(paintUI);

});