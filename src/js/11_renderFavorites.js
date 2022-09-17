'use strict';


// Function to render favorites list into Html
function renderFavorites(favorites) {

  if (favorites.length !== 0) {

    for (const favorite of favorites) {

      const listItem = document.createElement('li');
      listItem.classList.add('favorite', 'js_favorite');
      listItem.setAttribute('id', favorite.id);


      const listItemImage = document.createElement('img');
      if (favorite.image === '') {

        listItemImage.setAttribute('src', 'https://via.placeholder.com/210x295/ffffff/666666/?text=img');
        listItemImage.setAttribute('alt', favorite.name);
        listItemImage.classList.add('favorite__image');

      } else {

        listItemImage.setAttribute('src', `${favorite.image}/preview`);
        listItemImage.setAttribute('alt', favorite.name);
        listItemImage.classList.add('favorite__image');

      }
      listItem.appendChild(listItemImage);


      const listItemTitle = document.createElement('h3');
      listItemTitle.classList.add('favorite__title');
      const listItemTitleContent = document.createTextNode(favorite.name);
      listItemTitle.appendChild(listItemTitleContent);
      listItem.appendChild(listItemTitle);


      const listItemButton = document.createElement('button');
      listItemButton.classList.add('deleteFavorite', 'js_deleteFavorite');
      listItemButton.setAttribute('id', favorite.id);

      const listItemButtonIcon = document.createElement('ion-icon');
      listItemButtonIcon.classList.add('deleteFavorite__icon');
      listItemButtonIcon.setAttribute('name', 'heart-dislike-outline');
      listItemButton.appendChild(listItemButtonIcon);

      listItem.appendChild(listItemButton);


      favoritesList.appendChild(listItem);

    }

    listenersDeleteFavoritesButton();

  } else {

    favoritesList.classList.add('hidden');
    deleteAllFavoritesButton.classList.add('hidden');

    const errorFavoriteEmpty = createPErrorItem('A ver cómo te lo explico...');
    const errorFavoriteEmpty2 = createPErrorItem('eehh...está vacío...¿ves?');
    const errorFavoriteEmpty3 = createPErrorItem('No hay cócteles aquí');
    const errorImageFavoriteEmpty = createImgErrorItem('./assets/images/monstruos.jpg', 'Monstruos S.A. - Boo está asustada por si hay monstruos en el armario y Sulley le enseña que está vacío', 'A ver cómo se lo explico...eehh...está vacío...¿ves? No hay monstruos aquíii.');
    favoritesContainer.append(errorFavoriteEmpty, errorFavoriteEmpty2, errorFavoriteEmpty3, errorImageFavoriteEmpty);

  }

}


const deletePreviusRenderedFavorites = () => {

  const liList = document.querySelectorAll('.js_favorite');
  for (const item of liList) {
    item.remove();
  }

};

const deleteErrorEmptyFavorites = () => {

  const errorEmptyFavoritesList = document.querySelectorAll('.js_errorText');
  for (const item of errorEmptyFavoritesList) {
    item.remove();
  }

  const errorEmptyFavoritesImage = document.querySelector('.js_errorImage');
  errorEmptyFavoritesImage.remove();

  favoritesList.classList.remove('hidden');
  deleteAllFavoritesButton.classList.remove('hidden');

};