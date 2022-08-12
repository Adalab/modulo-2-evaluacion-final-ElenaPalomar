'use strict';

function validateInputValue(searchTextValue) {
  if(searchTextValue === ''){

    const errorSearch = document.createElement('h2');
    errorSearch.classList.add('header__title');
    const errorSearchText = document.createTextNode('No has introducido ningún cocktel para buscar');
    errorSearch.appendChild(errorSearchText);
    mainContainer.appendChild(errorSearch);
    // Este mensaje se acumula con el del catch y con el de que no haya ningún valor en el campo de búsqueda, habría que borrar los anteriores antes de que salga este

  } else {
    getFromServer(searchTextValue);
  }
}


// Function to access the server, save the infomation in an array and render the drinks in HTML
function getFromServer(searchTextValue) {

  fetch(`https://www.thecocktaildb.com/api/json/v2/1/search.php?s=${searchTextValue}`)
    .then(response => response.json())
    .then(data => {

      if(data.drinks.length === 0) {

        const errorSearch = document.createElement('h2');
        errorSearch.classList.add('header__title');
        const errorSearchText = document.createTextNode('El cocktel que estas buscando, no se encuentra entre nuestras sugerencias. Prueba con otro cocktel por favor.');
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



// Function to add or remove the favorite items from the array 'favorites' (let favorites = [] was declared in VARIABLES)

function addRemoveDrinkToFavorites(event) {
  const idSelectedDrink = event.currentTarget.id;

  const foundDrink = drinks.find(item => {
    return item.idDrink === idSelectedDrink;
  });

  const foundFavoriteIndex = favorites.findIndex(item => {
    return item.idDrink === idSelectedDrink;
  });

  if(foundFavoriteIndex === -1 ) {
    favorites.push(foundDrink);
  } else {
    favorites.splice(foundFavoriteIndex, 1);
  }

}


// Function to render drinks list into Html
function renderDrinksHtml() {
  let html = '';
  console.log(drinks);

  for (const drink of drinks) {

    let classFavorite = '';
    const foundFavoriteIndex = favorites.findIndex(item => {
      return item.idDrink === drink.idDrink;
    });

    if(foundFavoriteIndex !== -1 ) {
      classFavorite = 'drink--favorite';
    } else {
      classFavorite = '';
    }

    html += `<li class="drink js_drinks ${classFavorite}" id=${drink.idDrink}>`;

    if (drink.strDrinkThumb === '') {
      html += ` <img src='https://via.placeholder.com/210x295/ffffff/666666/?text=img' alt='${drink.strDrink}' />`;
    } else {
      html += ` <img src='${drink.strDrinkThumb}/preview' class="drink__image" alt='${drink.strDrink}' />`;
    }

    html += ` <h3 class="drink__title">${drink.strDrink}</h3>`;
    html += `</li>`;
  }

  mainList.innerHTML = html;

  listenersRenderedDrinks();

}


// Function to render favorites list into Html
function renderFavoritesHtml(favorites) {

  let html = '';

  for (const favorite of favorites) {

    html += `<li class="favorite js_favorite" id=${favorite.idDrink}>`;

    if (favorite.strDrinkThumb === '') {
      html += `  <img src='https://via.placeholder.com/210x295/ffffff/666666/?text=img' class="favorite__image" alt='${favorite.strDrink}' />`;
    } else {
      html += `  <img src='${favorite.strDrinkThumb}/preview' class="favorite__image" alt='${favorite.strDrink}' />`;
    }

    html += `  <h3 class="favorite__title">${favorite.strDrink}</h3>`;

    html += `  <button class="deleteFavorite js_deleteFavorite deleteFavorite__icon" id=${favorite.idDrink}><i class="fa-solid fa-circle-xmark"></i></button>`;

    html += `</li>`;

  }

  favoriteList.innerHTML = html;

  listenersDeleteFavoritesButton();

}


// conditional to save favorites from local storage before add/remove any one more
if(favoriteDrinkList !== null) {

  favorites = favoriteDrinkList;
  renderFavoritesHtml(favoriteDrinkList);

}



// Function to delete all favorites (this one have a handle function and a listener to)
function deleteAllFavorites() {

  const favoritesContainer = favoriteList.parentElement;

  const deleteAllFavoritesButton = document.createElement('button');
  const deleteAllFavoritesButtonText = document.createTextNode('Borar todos los favoritos');

  deleteAllFavoritesButton.appendChild(deleteAllFavoritesButtonText);
  deleteAllFavoritesButton.classList.add('resetFavorites');

  favoritesContainer.appendChild(deleteAllFavoritesButton);


  function handleClickDeleteAllFavorites(event) {

    event.preventDefault();

    favorites = [];

    /* localStorage.setItem('favoriteDrinkList', JSON.stringify(favorites)); */
    localStorage.removeItem('favoriteDrinkList');

    renderDrinksHtml();
    renderFavoritesHtml(favorites);
  }

  deleteAllFavoritesButton.addEventListener('click', handleClickDeleteAllFavorites);

}

deleteAllFavorites();