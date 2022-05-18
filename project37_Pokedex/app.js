
/************ const link **************/
const url_image = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png';

const url_firstGen = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const url_eachPokemon = 'https://pokeapi.co/api/v2/pokemon/1/';

/************************************/

//objecto de colores segun tipo de pokemon
const typeColors = {
   normal: 'rgb(168, 168, 120)',
   fire: 'rgb(240, 128, 48)',
   water: 'rgb(104, 144, 240)',
   grass: 'rgb(120, 200, 80)',
   electric: 'rgb(248, 208, 48)',
   ice: 'rgb(152, 216, 216)',
   fighting: 'rgb(192, 48, 40)',
   poison: 'rgb(160, 64, 160)',
   ground: 'rgb(224, 192, 104)',
   flying: 'rgb(168, 144, 240)',
   psychic: 'rgb(248, 88, 136)',
   bug: 'rgb(168, 184, 32)',
   rock: 'rgb(184, 160, 56)',
   ghost: 'rgb(112, 88, 152)',
   dark: 'rgb(112, 88, 72)',
   dragon: 'rgb(112, 56, 248)',
   steel: 'rgb(184, 184, 208)',
   fairy: 'rgb(240, 182, 188)'

}

/************ const generales *****************/

const masterContainer = document.querySelector('.masterContainer');
const body = document.querySelector('body');
// console.log(body);

/*************************************/

//el numero de pokemon a fetchear
const numberFirstGen = 151;




/**************** Functiones async *********************/


(async function fetchPokemons (){

   for (let i = 1; i <= numberFirstGen; i++) {
      await getData(`https://pokeapi.co/api/v2/pokemon/${i}/`).then(writeUI);
      
   }
})();


async function getData (url) {
   const response = await fetch(url);

   const data = await response.json();

   return data;
   // writeUI(data);
}


/*************************************/


/************ Funciones escribir UI *****************/

function writeUI(pokemon){
   

   const pokemonType = pokemon.types[0].type.name;
   
   const card = document.createElement('div');
   card.classList.add('card');

   //añadirle el efecto del hover a las cartas principales
   card.addEventListener('mouseover',()=>{
      card.classList.add('active');
   });
   card.addEventListener('mouseout',()=>{
      card.classList.remove('active');
   });

   //necesito este hack para poder fetchear la imagen 
   let id_poke = pokemon.id.toString().padStart(3,'0');

   card.style.boxShadow = `2px 2px 10px 1px ${typeColors[pokemonType]}`;
   card.innerHTML = `
   <div class="imgContainer">
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id_poke}.png" alt="Pokemon">
   </div>
   <h2 class="pokeName">${pokemon.name}</h2>
   <button class="openModal" onclick="openPokeModal(${pokemon.id})" style="box-shadow: 0 0 5px ${typeColors[pokemonType]};">Ver mas</button>
   <div class="pokeInfo">
      <div class="typeBox" style="background-color: ${typeColors[pokemonType]}">${pokemonType}</div>
      <p>nº: ${id_poke}</p>
   </div>
   `;
   

   masterContainer.appendChild(card);

}


/*************** Funciones para el modal *************************/

function openPokeModal(pokemon_id){
   const url = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}`;
   getData(url)
   .then(writeModal);
   
}


//funcion para cerrar el modal
function closeModal(){

   //#1- hack para contrarrestar el overflow hidden del body cuando appendeo el modal al body
   document.body.style.overflow = 'auto';
   
   let childs = body.children; 
   
   for(let child of childs){
      
      if (child.classList.contains('modalWindow')){
         
         child.remove();
      }
   }
   
}


function writeModal(pokeData){
   let pokeColor = pokeData.types[0].type.name;

   let bodyInfo = body.getBoundingClientRect();

   let id = pokeData.id.toString().padStart(3,'0');
   // console.log(pokeData);
   const modal = document.createElement('div');
   modal.className = "modalWindow";

   //hack para solucionar que el modal se muestre en el 100vh, sin esto se appendearia al top:0 del body y si el body es mas largo que el 100vh saldria cortado
   modal.style.top = `${bodyInfo.top * -1}px`;
   // modal.style.transform = "scale(0)";
   modal.innerHTML = `
   <div class="modalMasterContainer ">
   <button class="modalBtn" onclick="closeModal()">X</button>
   <div class="horizontalRowTop"></div>
   <div class="horizontalRowBottom"></div>
   <div class="verticalRowLeft"></div>
   <div class="verticalRowRight"></div>

   <div class="nameContainer">
      <div class="pokeballContainer">
        <img src="img/pokeball.png" alt="">
      </div>
      <h2 class="pokemonName">${pokeData.name}</h2>
      <p class="pokemonFit">weight: ${pokeData.weight} | height: ${pokeData.height} </p>
    </div>

   <div class="statsContainer">
     <div class="statRow">
       <p>${pokeData.stats[0].stat.name}: ${pokeData.stats[0].base_stat}</p>
       <div class="progressBar" style="width: ${pokeData.stats[0].base_stat}px;"></div>
     </div>
     <div class="statRow">
       <p>${pokeData.stats[1].stat.name}: ${pokeData.stats[1].base_stat}</p>
       <div class="progressBar" style="width: ${pokeData.stats[1].base_stat}px;"></div>
     </div>
     <div class="statRow">
       <p>${pokeData.stats[2].stat.name}: ${pokeData.stats[2].base_stat}</p>
       <div class="progressBar" style="width: ${pokeData.stats[2].base_stat}px;"></div>
     </div>
     <div class="statRow">
       <p>${pokeData.stats[3].stat.name}: ${pokeData.stats[3].base_stat}</p>
       <div class="progressBar" style="width: ${pokeData.stats[3].base_stat}px;"></div>
     </div>
     <div class="statRow">
       <p>${pokeData.stats[4].stat.name}: ${pokeData.stats[4].base_stat}</p>
       <div class="progressBar" style="width: ${pokeData.stats[4].base_stat}px;"></div>
     </div>
     <div class="statRow">
       <p>${pokeData.stats[5].stat.name}: ${pokeData.stats[5].base_stat}</p>
       <div class="progressBar" style="width: ${pokeData.stats[5].base_stat}px;"></div>
     </div>
   </div>

   <div class="extraInfoContainer">
      <div class="abilitiesContainer">
        <h3>Abilities:</h3>
        <p>${pokeData.abilities[0].ability.name},</p>
        <p>${pokeData.abilities.length >=2 ? pokeData.abilities[1].ability.name : ''}</p>
      </div>
      <div class="poketypeContainer">
        <div class="poketypeBox" style="background-color: ${typeColors[pokeData.types[0].type.name]};">${pokeData.types[0].type.name}</div>
        <div class="poketypeBox" style="background-color: ${pokeData.types.length >=2 ? typeColors[pokeData.types[1].type.name] : 'transparent'};">${pokeData.types.length >=2 ? pokeData.types[1].type.name : ''}</div>

      </div>
    </div>

   <div class="centerContainer">
     <div class="circleBig" style="background-color: ${typeColors[pokeColor]};"></div>
     <div class="circleSmall" style="background-color: ${typeColors[pokeColor]};"></div>
     <div class="imgModalContainer">
       <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png" alt="">
     </div>
   </div>
 </div>
   `;

   body.appendChild(modal);

   //#1- hack para que solo s evea el modal
   document.body.style.overflow = 'hidden';

   setTimeout(() => {
      modal.style.transform = "scale(1)";
      
   }, 0);
};