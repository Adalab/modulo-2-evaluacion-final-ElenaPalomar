'use strict';

function renderDrinksHtml() {
  let html = '';

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
    html += ` <h4 ">Lista de tags</h4>`;
    html += ` <p >${drink.strTags}</p>`;

    if(drink.strTags !== null) {

      if(drink.strTags.includes('Fruity')){
        html += ` <h4 >Sabor afrutado</h4>`;
      } else {
        html += ` <h4 >No contiene frutas</h4>`;
      }

    } else {
      html += ` <h4 >No hay detalles adicionales</h4>`;
    }


    html += `</li>`;
  }

  mainList.innerHTML = html;

  listenersRenderedDrinks();

}