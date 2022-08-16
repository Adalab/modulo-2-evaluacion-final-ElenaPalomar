'use strict';


//FUNCTIONS

// Function to add or remove the favorite items from the array 'favorites' (let favorites = [] was declared in VARIABLES)

function addRemoveDrinkToFavorites(event) {
  const idSelectedDrink = event.currentTarget.id;

  const foundDrink = drinks.find(item => {
    return item.idDrink === idSelectedDrink;
  });

  const foundFavoriteIndex = favorites.findIndex(item => {
    return item.idDrink === idSelectedDrink;
  });

  if (foundFavoriteIndex === -1) {
    favorites.push(foundDrink);
  } else {
    favorites.splice(foundFavoriteIndex, 1);
  }

}


// HANDLE FUNCTIONS

// Function to add/remove favorites items when cliks the drinks elements, save the favorite list in local storage and render both, drinks and favorites, list
function handleClickRenderedDrinks(event) {

  addRemoveDrinkToFavorites(event);

  localStorage.setItem('favoriteDrinkList', JSON.stringify(favorites));

  renderDrinksHtml();
  renderFavoritesHtml(favorites);

}


// LISTENERS

// Listeners of each element of drinks list to add/remove a drink to/from favorites
function listenersRenderedDrinks() {
  const renderedDrinks = document.querySelectorAll('.js_drinks');

  for (const item of renderedDrinks) {
    item.addEventListener('click', handleClickRenderedDrinks);
  }
}