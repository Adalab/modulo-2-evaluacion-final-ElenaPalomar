'use strict';


// HANDLE FUNCTIONS

// Function to reset the search
function handleClickResetSearch(event) {

  event.preventDefault();

  console.log('hola');

  searchText.value = '';

  console.log(searchText.value);

  mainList__list.innerHTML = '';
  mainList.classList.add('hidden');

}


// LISTENERS

// Listener of the new search button
resetSearch.addEventListener('click', handleClickResetSearch);