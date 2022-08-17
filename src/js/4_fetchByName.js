'use strict';

// Function to access the server, save the infomation in an array and render the drinks in HTML
function getFromServer(searchTextValue) {

  fetch(`https://www.thecocktaildb.com/api/json/v2/1/search.php?s=${searchTextValue}`)
    .then(response => response.json())
    .then(data => {

      const dataDrinks = data.drinks;

      if (dataDrinks === null) {

        deletePreviousQueries();

        errorMessage('Lo siento. Mis respuestas son limitadas. Haz las consultas correctas.');

      } else {

        drinks = dataDrinks.map(item => {
          return {
            idDrink: item.idDrink,
            strDrink: item.strDrink,
            strDrinkThumb: item.strDrinkThumb,
            strTags: item.strTags
          };
        });

        eraseErrorMessage();

        mainList.classList.remove('hidden');
        renderDrinksHtml();

      }

    })
    .catch((error) => {

      mainList.classList.add('hidden');

      deletePreviousQueries();

      errorMessage('No lo intentes. Hazlo o no lo hagas. Pero en este caso inténtalo de nuevo por favor. Hemos tenido un problemilla momentáneo.');

    });
}