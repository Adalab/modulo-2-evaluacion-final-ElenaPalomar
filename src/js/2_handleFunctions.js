'use strict';

// Function to fetch server information with the value of input:text when clicking the search button
function handleClickSearchButton(event) {
  event.preventDefault();

  const searchTextValue = searchText.value.toLowerCase();

  validateInputValue(searchTextValue);

}


// Function to add/remove favorites items when cliks the drinks elements, save the favorite list in local storage and render both, drinks and favorites, list
function handleClickRenderedDrinks(event) {

  addRemoveDrinkToFavorites(event);

  localStorage.setItem('favoriteDrinkList', JSON.stringify(favorites));

  renderDrinksHtml();
  renderFavoritesHtml(favorites);

}


// Function de remove favorite item clicking the 'x' that they have
function handleClickDeleteFavorites(event) {

  const idFavoriteButton = event.currentTarget.id;

  const foundFavoriteIndex = favorites.findIndex(item => {
    return item.idDrink === idFavoriteButton;
  });

  if(foundFavoriteIndex !== -1 ) {
    favorites.splice(foundFavoriteIndex, 1);
  }

  renderFavoritesHtml(favorites);
  renderDrinksHtml();

}


// Function to reset the search
function handleClickResetSearch(event) {

  event.preventDeafult();

  searchText.value = '';

  renderDrinksHtml();
}