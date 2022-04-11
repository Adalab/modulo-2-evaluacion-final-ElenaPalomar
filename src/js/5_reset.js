'use strict';

function handleClickResetSearch(event) {

  event.preventDeafult();

  searchText.value = '';

  renderDrinksHtml();
}

resetSearch.addEventListener('click', handleClickResetSearch);



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

    localStorage.setItem('favoriteDrinkList', JSON.stringify(favorites));

    renderDrinksHtml();
    renderFavoritesHtml(favorites);
  }

  deleteAllFavoritesButton.addEventListener('click', handleClickDeleteAllFavorites);

}

deleteAllFavorites();
