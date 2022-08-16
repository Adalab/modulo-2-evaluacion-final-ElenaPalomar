'use strict';

// HANDLE FUNCTION

// Function de remove favorite item clicking the 'x' that they have
function handleClickDeleteFavorites(event) {

  const idFavoriteButton = event.currentTarget.id;

  const foundFavoriteIndex = favorites.findIndex(item => {
    return item.idDrink === idFavoriteButton;
  });

  if (foundFavoriteIndex !== -1) {
    favorites.splice(foundFavoriteIndex, 1);
  }

  localStorage.setItem('favoriteDrinkList', JSON.stringify(favorites));

  renderFavoritesHtml(favorites);
  renderDrinksHtml();

}


// LISTERNERS

// Listeners of each 'x' of each element of favorites list
function listenersDeleteFavoritesButton() {
  const deleteButtons = document.querySelectorAll('.js_deleteFavorite');

  for (const item of deleteButtons) {
    item.addEventListener('click', handleClickDeleteFavorites);
  }

}