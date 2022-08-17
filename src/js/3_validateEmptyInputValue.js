'use strict';


function validateInputValue(searchTextValue) {
  if (searchTextValue === '') {

    deletePreviousQueries();

    errorMessage('Nada, es inútil. No sé qué será.');
    errorMessage('Es un acertijo: Di, "cóctel que quieres buscar" y encuentra.');

    // Este mensaje se acumula con el del catch y con el de que no haya ningún valor en el campo de búsqueda, habría que borrar los anteriores antes de que salga este

  } else {

    getFromServer(searchTextValue);

  }
}