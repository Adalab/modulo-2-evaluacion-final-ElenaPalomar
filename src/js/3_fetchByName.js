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
        const errorSearchText = document.createTextNode('El cocktel que estas buscando, no se encuentra entre nuestras sugerencias. Prueba con otro cocktel por favor.');
        // Mis respuestas son limitadas. Haz las consultas correctas.
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
        // Si declaro 'drinks' como constante o como variable (const o let) no me llega a la función renderDrinksHtml(), me llega como que 'drinks' es un array vacío. En cambio si la declaro así a las bravas, todo va como la seda
        renderDrinksHtml();

      }

    })
    .catch((error) => {
      const errorSearch = document.createElement('h2');
      errorSearch.classList.add('header__title');
      const errorSearchText = document.createTextNode('Ha ocurrido un error, prueba de nuevo');
      errorSearch.appendChild(errorSearchText);
      mainContainer.appendChild(errorSearch);
      // Este mensaje se acumula con el de que no haya ningún valor en el campo de búsquedal y con el de que no haya ningún valor que coincida con ninguno de nuestros cockteles, habría que borrar los anteriores antes de que salga este
      console.log(error);
    });
}