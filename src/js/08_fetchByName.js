'use strict';

// Function to access the server, save the infomation in an array and render the drinks in HTML
function getFromServer(searchTextValue) {

  fetch(`https://www.thecocktaildb.com/api/json/v2/1/search.php?s=${searchTextValue}`)
    .then(response => response.json())
    .then(data => {

      const dataDrinks = data.drinks;

      if (dataDrinks === null) {

        deletePreviousQueries();

        errorMessage('Lo siento. Mis respuestas son limitadas. Haz las consultas correctas.', './assets/images/rightSearchs.jpg', 'Doctor Alfred Lanning', 'Yo, Robot - Interrogatorio al doctor Alfred Lanning por el detective Del Spooner, después de su muerte. - "Lo siento. Mis respuestas son limitadas. Haz las preguntas correctas."');

      } else {

        // let drinks = [] was declared in VARIABLES
        drinks = dataDrinks.map(item => {
          return {
            id: item.idDrink,
            name: item.strDrink,
            image: item.strDrinkThumb
          };
        });

        deletePreviousQueries();
        renderDrinks();

        searchContainer.classList.remove('hidden');
        favoritesContainer.classList.add('hidden');
        menuShowSearches();


        // Display the cocktail list title dynamically with the name of the searched cocktail
        searchTitle.innerHTML = searchTextValue;

      }
    })
    .catch(() => {

      searchContainer.classList.add('hidden');

      deletePreviousQueries();

      errorMessage('No lo intentes. Hazlo o no lo hagas. Pero en este caso inténtalo de nuevo por favor. Hemos tenido un problemilla momentáneo.', './assets/images/noTrys.jpg', 'Yoda', 'El imperio contrataca - Yoda enseñando a luke a usar la fuerza - "No lo intentes. Hazlo o no lo hagas. Pero no lo intentes."');

    });
}