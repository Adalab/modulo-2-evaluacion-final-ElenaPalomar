'use strict';

function addRemoveDrinkToFavorites(event) {
  const idSelectedDrink = event.currentTarget.id;

  const foundDrink = drinks.find(item => {
    return item.idDrink === idSelectedDrink;
  });

  console.log(foundDrink.strDrink);

  /* const foundFavoriteIndex = favorites.findIndex(item => {
    return item.idDrink === idSelectedDrink;
  });

  if(foundFavoriteIndex === -1 ) {
    favorites.push(foundDrink);
  } else {
    favorites.splice(foundFavoriteIndex, 1);
  } */
}

function handleClickRenderedDrinks(event) {

  addRemoveDrinkToFavorites(event);

  localStorage.setItem('favoriteDrinkList', JSON.stringify(favorites));

  renderDrinksHtml();
  renderFavoritesHtml(favorites);

}


function listenersRenderedDrinks() {
  // Listener cocktail event
  const renderedDrinks = document.querySelectorAll('.js_drinks');

  for (const item of renderedDrinks) {
    item.addEventListener('click', handleClickRenderedDrinks);
  }
}



function handleClickDeleteFavorites(event) {

  const idFavoriteButton = event.currentTarget.id;

  const foundFavoriteIndex = favorites.findIndex(item => {
    return item.idDrink === idFavoriteButton;
  });

  if(foundFavoriteIndex !== -1 ) {
    favorites.splice(foundFavoriteIndex, 1);
  }

  renderFavoritesHtml(favorites);

}


function listenersDeleteFavoritesButton() {
  const deleteButtons = document.querySelectorAll('.js_deleteFavorite');

  for (const item of deleteButtons) {
    item.addEventListener('click', handleClickDeleteFavorites);
  }

}