'use strict';

// VARIABLES

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


// LocalStorage
const favoriteDrinkList = JSON.parse(localStorage.getItem('favoriteDrinkList'));


// Main Container
const mainContainer = document.querySelector('.main');