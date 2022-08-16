'use strict';


// HANDLE FUNCTIONS

// Function to reset the search
function handleClickResetSearch(event) {

  event.preventDefault();

  searchText.value = '';

  /* if (mainList.className === 'hidden') {
    mainList__list.innerHTML = '';
    mainList.classList.add('hidden');
  } else if (document.querySelector('.header__title')) {
    document.querySelector('.header__title').removeChild();
  } */

  mainList_list.innerHTML = '';
  mainList.classList.add('hidden');

}


// LISTENERS

// Listener of the new search button
resetSearch.addEventListener('click', handleClickResetSearch);