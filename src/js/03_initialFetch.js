'use strict';

// Function to access the server, save the infomation in an array and render the drinks in HTML
function initialGetFromAPI() {

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass`)
    .then(response => response.json())
    .then(data => {

      const dataInitialDrinks = data.drinks;

      initialDrinks = dataInitialDrinks.map(item => {
        return {
          id: item.idDrink,
          name: item.strDrink,
          image: item.strDrinkThumb
        };
      });


      // Función to generate a random number to sort the cocktails randomly
      const random = () => Math.random() - 0.5;

      const randomInitialDrinks = initialDrinks.sort(random);

      const reducedRandomInitialDrinks = randomInitialDrinks.splice(7, 20);

      initialDrinks = reducedRandomInitialDrinks;


      renderInitialDrinks();


      searchTitle.innerHTML = 'Algunos cócteles';

    })
    .catch(() => {

      searchContainer.classList.add('hidden');

      deletePreviousQueries();
      deleteErrorMessage();

      errorMessage('No lo intentes. Hazlo o no lo hagas. Pero en este caso inténtalo de nuevo por favor. Hemos tenido un problemilla momentáneo.', './assets/images/noTrys.jpg', 'Yoda', 'El imperio contrataca - Yoda enseñando a luke a usar la fuerza - "No lo intentes. Hazlo o no lo hagas. Pero no lo intentes."');

    });
}


initialGetFromAPI();