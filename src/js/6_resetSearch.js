'use strict';

// FUNCTIONS

// Function to delete previous queries

const deletePreviousQueries = () => {

  if (!mainList.classList.contains('hidden')) {

    mainList_list.innerHTML = '';
    mainList.classList.add('hidden');

  } else {

    eraseErrorMessage();

  }

};


// HANDLE FUNCTIONS

// Function to reset the search
function handleClickResetSearch(event) {

  event.preventDefault();

  searchText.value = '';

  deletePreviousQueries();

}


// LISTENERS

// Listener of the new search button
resetSearch.addEventListener('click', handleClickResetSearch);