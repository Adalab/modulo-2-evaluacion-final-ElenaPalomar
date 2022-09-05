'use strict';


// HANDLE FUNCTIONs

// Function to fetch server information with the value of input:text when clicking the search button
function handleClickSearchButton(event) {

  event.preventDefault();

  const searchTextValue = searchText.value.toLowerCase();

  validateInputValue(searchTextValue);

}


// LISTENERS

// Listener of the search button
searchButton.addEventListener('click', handleClickSearchButton);