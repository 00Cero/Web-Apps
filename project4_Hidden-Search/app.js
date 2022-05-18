
const searchIcon = document.querySelector('.fa-search').parentElement;
const searchBar = document.querySelector('#search');


function showSearchBar(){
   searchBar.style.border = '2px solid black';
   searchBar.style.width = '200px';
   searchIcon.removeEventListener('click', showSearchBar);
   searchIcon.addEventListener('click', hideSearchBar);
}


function hideSearchBar(){
   searchBar.style.border = 'none';
   searchBar.style.outline = 'none';
   searchBar.style.width = '0';
   searchIcon.removeEventListener('click',hideSearchBar);
   searchIcon.addEventListener('click', showSearchBar);
}

searchIcon.addEventListener('click', showSearchBar);
