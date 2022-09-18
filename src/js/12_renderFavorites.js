'use strict';


// Function to render favorites list into Html
function renderFavorites(favorites) {

  if (favorites.length !== 0) {

    for (const favorite of favorites) {

      const liItem = createLiItem('favorite', 'js_favorite', favorite);

      const itemImage = createImgItem(favorite, 'favorite__image');
      liItem.appendChild(itemImage);

      const itemTitle = createh3Item('favorite__title', favorite);
      liItem.appendChild(itemTitle);

      const itemButton = createButtonItem('deleteFavorite', 'js_deleteFavorite', favorite, 'deleteFavorite__icon', 'heart-dislike-outline');
      liItem.appendChild(itemButton);

      favoritesList.appendChild(liItem);

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