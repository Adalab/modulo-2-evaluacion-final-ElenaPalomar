'use strict';

// Function to set favorites in Local Storage

const setLocalStorage = () => {

  localStorage.setItem('favoriteDrinkList', JSON.stringify(favorites));

};


// conditional to save favorites from local storage before add/remove any one more
/* if (favoriteDrinkList !== null) {

  favorites = favoriteDrinkList;
  renderFavorites(favorites);

} */