'use strict';

// VARIABLES

// Save cocktails info
let initialDrinks = [];
let drinks = [];

const searchText = document.querySelector('.js_searchText');
const searchButton = document.querySelector('.js_searchButton');


// Lists Container
const listsContainer = document.querySelector('.js_listsContainer');


// Error texts
const errorContainer = document.querySelector('.js_errorContainer');


// Searches
const searchContainer = document.querySelector('.js_searchContainer');
const searchList = document.querySelector('.js_searchList');
const searchTitle = document.querySelector('.js_searchTitle');


// Favorites
let favorites = [];
const favoritesContainer = document.querySelector('.js_favorites');
const favoritesList = document.querySelector('.js_favoritesList');
const deleteAllFavoritesButton = document.querySelector('.js_resetFavorites');


// LocalStorage
const favoriteDrinkList = JSON.parse(localStorage.getItem('favoriteDrinkList'));