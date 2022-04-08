'use strict';

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  .then(response => response.json())
  .then(data => {
    drinks = data.drinks;
    console.log(drinks);
  });