'use strict';


function validateInputValue(searchTextValue) {
  if (searchTextValue === '') {

    deletePreviousQueries();

    errorMessage('Nada, es inútil. No sé qué será.');
    errorMessage('Es un acertijo: Di, *nomre del cóctel que quieres buscar* y encuentra.', './assets/images/LOR.jpg', 'Puerta de Moria', 'La Comunidad del Anillo - Puerta de Moria - "Di amigo y entra".');

  } else {

    getFromServer(searchTextValue);

  }
}