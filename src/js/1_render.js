'use strict';

function renderDrinksHtml() {
  let html = '';

  for (const drink of drinks) {
    html += `<li>`;

    if (drink.strDrinkThumb === '') {
      html += ` <img src='https://via.placeholder.com/210x295/ffffff/666666/?text=img' alt='${drink.strDrink}' />`;
    } else {
      html += ` <img src='${drink.strDrinkThumb}/preview' alt='${drink.strDrink}' />`;
    }

    
    html += ` <h3>${drink.strDrink}</h3>`;
    html += `</li>`;
  }

  mainList.innerHTML = html;
}