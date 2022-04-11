'use strict';

function handleClickRenderedDrinks(event) {

  if(favoriteDrinkList !== null) {
    favorites = favoriteDrinkList;
  }

  const idSelectedDrink = event.currentTarget.id;

  const foundDrink = drinks.find(item => {
    return item.idDrink === idSelectedDrink;
  });

  const foundFavoriteIndex = favorites.findIndex(item => {
    return item.idDrink === idSelectedDrink;
  });

  if(foundFavoriteIndex === -1 ) {
    favorites.push(foundDrink);
  } else {
    favorites.splice(foundFavoriteIndex, 1);
  }

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