'use strict';

// Functions to add/remove menu class to show/hide desired cocktails or favorite cocktails

const menuAddClass = (element, classMenu) => {
  element.classList.add(`menu__item--${classMenu}`);
};

const menuRemoveClass = (element, classMenu) => {
  element.classList.remove(`menu__item--${classMenu}`);
};

const menuShowFavorites = () => {
  menuAddClass(searchesMenuButton, 'hideSearches');
  menuAddClass(favoriteMenuButton, 'showFavorites');
  menuRemoveClass(searchesMenuButton, 'showSearches');
  menuRemoveClass(favoriteMenuButton, 'hideFavorites');
};

const menuShowSearches = () => {
  menuAddClass(searchesMenuButton, 'showSearches');
  menuAddClass(favoriteMenuButton, 'hideFavorites');
  menuRemoveClass(searchesMenuButton, 'hideSearches');
  menuRemoveClass(favoriteMenuButton, 'showFavorites');
};

// Function to display favorites container

const handleShowFavorites = () => {

  favoritesContainer.classList.remove('hidden');
  searchContainer.classList.add('hidden');

  menuShowFavorites();

};

favoriteMenuButton.addEventListener('click', handleShowFavorites);


// Function to display favorites container

const handleShowSearches = () => {

  searchContainer.classList.remove('hidden');
  favoritesContainer.classList.add('hidden');

  menuShowSearches();

};

searchesMenuButton.addEventListener('click', handleShowSearches);


