'use strict';

// Function to delete all favorites clicking 'Borrar todos los favoritos' button

function handleClickDeleteAllFavorites(event) {

  event.preventDefault();

  favorites = [];

  localStorage.removeItem('favoriteDrinkList');

  deletePreviusRenderedDrinks();
  renderDrinks(drinks);

  removePreviusRenderedFavorites();
  renderFavorites(favorites);
}

deleteAllFavoritesButton.addEventListener('click', handleClickDeleteAllFavorites);