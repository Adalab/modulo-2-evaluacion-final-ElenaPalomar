'use strict';

// Listener of the search button
searchButton.addEventListener('click', handleClickSearchButton);


//Listeners of each element of drinks list
function listenersRenderedDrinks() {
  const renderedDrinks = document.querySelectorAll('.js_drinks');

  for (const item of renderedDrinks) {
    item.addEventListener('click', handleClickRenderedDrinks);
  }
}

// Listeners of each 'x' of each element of favorites list
function listenersDeleteFavoritesButton() {
  const deleteButtons = document.querySelectorAll('.js_deleteFavorite');

  for (const item of deleteButtons) {
    item.addEventListener('click', handleClickDeleteFavorites);
  }

}


// Listener of the new search button
resetSearch.addEventListener('click', handleClickResetSearch);