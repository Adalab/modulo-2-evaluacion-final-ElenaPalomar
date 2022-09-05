'use strict';

// Function to delete all favorites clicking 'Borrar todos los favoritos' button

function handleClickDeleteAllFavorites(event) {

  event.preventDefault();

  favorites = [];

  localStorage.removeItem('favoriteDrinkList');

  if (drinks.length !== 0) {

    rerenderDrinks();
    rerenderFavorites();

  } else {

    rerenderInitialDrinks();
    rerenderFavorites();

  }

}

deleteAllFavoritesButton.addEventListener('click', handleClickDeleteAllFavorites);