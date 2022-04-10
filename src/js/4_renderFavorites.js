'use strict';

function renderFavorites() {

  let html = '';

  for (const favorite of favorites) {

    html += `<li class="favorite js_favorites" id=${favorite.idDrink}>`;

    if (favorite.strDrinkThumb === '') {
      html += ` <img src='https://via.placeholder.com/210x295/ffffff/666666/?text=img' alt='${favorite.strDrink}' />`;
    } else {
      html += ` <img src='${favorite.strDrinkThumb}/preview' alt='${favorite.strDrink}' />`;
    }

    html += ` <h3>${favorite.strDrink}</h3>`;
    html += `</li>`;

  }

  favoriteList.innerHTML = html;

}