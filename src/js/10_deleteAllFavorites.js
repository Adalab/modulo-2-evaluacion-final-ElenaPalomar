'use strict';

// Function to delete all favorites (this one have a handle function and a listener to)
function deleteAllFavorites() {

  const favoritesContainer = favoriteList.parentElement;

  const deleteAllFavoritesButton = document.createElement('button');
  const deleteAllFavoritesButtonText = document.createTextNode('Borar todos los favoritos');

  deleteAllFavoritesButton.appendChild(deleteAllFavoritesButtonText);
  deleteAllFavoritesButton.classList.add('resetFavorites');

  favoritesContainer.appendChild(deleteAllFavoritesButton);


  function handleClickDeleteAllFavorites(event) {

    event.preventDefault();

    favorites = [];

    /* localStorage.setItem('favoriteDrinkList', JSON.stringify(favorites)); */
    localStorage.removeItem('favoriteDrinkList');

    renderDrinksHtml();
    renderFavoritesHtml(favorites);
  }

  deleteAllFavoritesButton.addEventListener('click', handleClickDeleteAllFavorites);

}

deleteAllFavorites();