'use strict';


function validateInputValue(searchTextValue) {
  if (searchTextValue === '') {

    errorContainer.classList.remove('hidden');

    const errorSearch = document.createElement('p');
    errorSearch.classList.add('header__title', 'js_errorText');
    const errorSearchText = document.createTextNode('Nada, es inútil. No sé qué será.');
    errorSearch.appendChild(errorSearchText);
    errorContainer.appendChild(errorSearch);

    const errorSearch2 = document.createElement('p');
    errorSearch2.classList.add('header__title', 'js_errorText');
    const errorSearchText2 = document.createTextNode('Es un acertijo: Di, "cóctel que quieres buscar" y encuentra.');
    errorSearch2.appendChild(errorSearchText2);
    errorContainer.appendChild(errorSearch2);

    // Este mensaje se acumula con el del catch y con el de que no haya ningún valor en el campo de búsqueda, habría que borrar los anteriores antes de que salga este

  } else {

    getFromServer(searchTextValue);

  }
}