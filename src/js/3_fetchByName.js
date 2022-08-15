'use strict';

// Function to access the server, save the infomation in an array and render the drinks in HTML
function getFromServer(searchTextValue) {

  fetch(`https://www.thecocktaildb.com/api/json/v2/1/search.php?s=${searchTextValue}`)
    .then(response => response.json())
    .then(data => {

      const prueba = data.drinks;
      console.log(prueba);

      if (prueba === null) {

        const errorSearch = document.createElement('h2');
        errorSearch.classList.add('header__title');
        const errorSearchText = document.createTextNode('Lo siento. Mis respuestas son limitadas. Haz las consultas correctas.');
        errorSearch.appendChild(errorSearchText);
        mainContainer.appendChild(errorSearch);
        // Este mensaje se acumula con el del catch y con el de que no haya ningún valor que coincida con ninguno de nuestros cockteles, habría que borrar los anteriores antes de que salga este

      } else {

        drinks = data.drinks.map(item => {
          return {
            idDrink: item.idDrink,
            strDrink: item.strDrink,
            strDrinkThumb: item.strDrinkThumb,
            strTags: item.strTags
          };
        });

        renderDrinksHtml();

      }

    })
    .catch((error) => {
      const errorSearch = document.createElement('h2');
      errorSearch.classList.add('header__title');
      const errorSearchText = document.createTextNode('No lo intentes. Hazlo o no lo hagas. Pero en este caso inténtalo de nuevo por favor. Hemos tenido un problemilla momentáneo.');
      errorSearch.appendChild(errorSearchText);
      mainContainer.appendChild(errorSearch);
      // Este mensaje se acumula con el de que no haya ningún valor en el campo de búsquedal y con el de que no haya ningún valor que coincida con ninguno de nuestros cockteles, habría que borrar los anteriores antes de que salga este
      console.log(error);
    });
}