'use strict';

// Save cocktail info
const mainList = document.querySelector('.js_mainList');
let drinks = [];


// Search
const searchText = document.querySelector('.js_searchText');
const searchButton = document.querySelector('.js_searchButton');



// Favorites
let favorites = [];
const favoriteList = document.querySelector('.js_favoriteList');


// Reset Search
const resetSearch = document.querySelector('.js_reset');


/* // Reset All Favorites
const favoritesContainer = document.querySelector('.js_favorites'); */



//LocalStorage
const favoriteDrinkList = JSON.parse(localStorage.getItem('favoriteDrinkList'));