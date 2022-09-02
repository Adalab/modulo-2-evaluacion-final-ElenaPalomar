'use strict';


// Function to render favorites list into Html
function renderFavorites(favorites) {

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

}


const removePreviusRenderedFavorites = () => {

  const liList = document.querySelectorAll('.js_favorite');
  for (const item of liList) {
    item.remove();
  }

};