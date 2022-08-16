'use strict';

// VARIABLES

// Save cocktail info
const mainList_list = document.querySelector('.js_mainList_list');
let drinks = [];


// Search
const searchText = document.querySelector('.js_searchText');
const searchButton = document.querySelector('.js_searchButton');
const mainList = document.querySelector('.js_mainList');


// Favorites
let favorites = [];
const favoriteList = document.querySelector('.js_favoriteList');


// Reset Search
const resetSearch = document.querySelector('.js_reset');


// LocalStorage
const favoriteDrinkList = JSON.parse(localStorage.getItem('favoriteDrinkList'));


// Main Container
const mainContainer = document.querySelector('.main');


// Error texts
const errorContainer = document.querySelector('.js_errorContainer');