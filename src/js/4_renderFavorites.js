'use strict';

function renderFavoritesHtml(favorites) {

  let html = '';

  for (const favorite of favorites) {

    html += `<li class="favorite js_favorite" id=${favorite.idDrink}>`;

    if (favorite.strDrinkThumb === '') {
      html += `  <img src='https://via.placeholder.com/210x295/ffffff/666666/?text=img' alt='${favorite.strDrink}' />`;
    } else {
      html += `  <img src='${favorite.strDrinkThumb}/preview' alt='${favorite.strDrink}' />`;
    }

    html += `  <h3>${favorite.strDrink}</h3>`;

    html += `  <button class="deleteFavorite js_deleteFavorite" id=${favorite.idDrink}><i class="fa-solid fa-circle-xmark"></i></button>`;

    html += `</li>`;

  }

  favoriteList.innerHTML = html;

  listenersDeleteFavoritesButton();

}


