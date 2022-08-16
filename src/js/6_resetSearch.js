'use strict';


// HANDLE FUNCTIONS

// Function to reset the search
function handleClickResetSearch(event) {

  event.preventDefault();

  searchText.value = '';

  if (!mainList.classList.contains('hidden')) {

    mainList_list.innerHTML = '';
    mainList.classList.add('hidden');

  } else if (!errorContainer.classList.contains('hidden')) {

    const errorText = document.querySelectorAll('.js_errorText');

    for (const item of errorText) {
      item.remove();
    }

    errorContainer.classList.add('hidden');

  }
}


// LISTENERS

// Listener of the new search button
resetSearch.addEventListener('click', handleClickResetSearch);