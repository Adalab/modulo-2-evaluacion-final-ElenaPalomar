'use strict';

function handleClickSearchButton(event) {
  event.preventDefault();

  const searchTextValue = searchText.value;

  fetch(`https://www.thecocktaildb.com/api/json/v2/1/search.php?s=${searchTextValue}`)
    .then(response => response.json())
    .then(data => {

      console.log(data);

      drinks = data.drinks;

      renderDrinksHtml();

    });

}

searchButton.addEventListener('click', handleClickSearchButton);
