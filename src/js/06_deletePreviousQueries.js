'use strict';

// FUNCTIONS

// Function to delete previous queries

const deletePreviousQueries = () => {

  if (!mainList.classList.contains('hidden')) {

    mainList_list.innerHTML = '';
    mainList.classList.add('hidden');

  } else {

    deleteErrorMessage();

  }

};
