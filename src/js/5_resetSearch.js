'use strict';


// HANDLE FUNCTIONS

// Function to reset the search
function handleClickResetSearch(event) {

  event.preventDeafult();

  searchText.value = '';

  renderDrinksHtml();
}


// LISTENERS

// Listener of the new search button
resetSearch.addEventListener('click', handleClickResetSearch);