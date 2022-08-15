'use strict';


function validateInputValue(searchTextValue) {
  if (searchTextValue === '') {

    const errorSearch = document.createElement('h2');
    errorSearch.classList.add('header__title');
    const errorSearchText = document.createTextNode('Me gustas cuando callas porque estás como ausente, pero necesito tus palabras para encontrar lo que anhelas. Una letra entonces, una sílaba bastan.');
    errorSearch.appendChild(errorSearchText);
    mainContainer.appendChild(errorSearch);
    // Este mensaje se acumula con el del catch y con el de que no haya ningún valor en el campo de búsqueda, habría que borrar los anteriores antes de que salga este

  } else {
    getFromServer(searchTextValue);
  }
}