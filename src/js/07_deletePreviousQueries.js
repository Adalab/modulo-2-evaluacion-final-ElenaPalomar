'use strict';

// FUNCTIONS

// Function to delete previous queries

const deletePreviousQueries = () => {

  if (renderDrinks.length !== 0) {

    mainList_list.innerHTML = '';

  } else {

    deleteErrorMessage();

  }

};
