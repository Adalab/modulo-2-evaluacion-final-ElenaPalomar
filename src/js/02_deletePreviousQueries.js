'use strict';

// FUNCTIONS

// Function to delete previous queries

const deletePreviousQueries = () => {

  if (!listsContainer.classList.contains('hidden')) {

    searchList.innerHTML = '';

  } else {

    deleteErrorMessage();

  }

};
