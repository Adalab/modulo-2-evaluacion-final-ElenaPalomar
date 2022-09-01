// Function to render drinks list into Html
'use strict';

function renderDrinks(list) {

  for (const drink of list) {

    const foundFavoriteIndex = favorites.findIndex(item => {
      return item.id === drink.id;
    });


    const listItem = document.createElement('li');
    listItem.classList.add('drink', 'js_drinks');

    if (foundFavoriteIndex !== -1) {
      listItem.classList.add('drink--favorite');
    }

    listItem.setAttribute('id', drink.id);


    const listItemImage = document.createElement('img');
    if (drink.image === '') {

      listItemImage.setAttribute('src', 'https://via.placeholder.com/210x295/ffffff/666666/?text=img');
      listItemImage.setAttribute('alt', drink.name);
      listItemImage.classList.add('drink__image');

    } else {

      listItemImage.setAttribute('src', `${drink.image}/preview`);
      listItemImage.setAttribute('alt', drink.name);
      listItemImage.classList.add('drink__image');

    }
    listItem.appendChild(listItemImage);


    const listItemTitle = document.createElement('h3');
    listItemTitle.classList.add('drink__title');
    const listItemTitleContent = document.createTextNode(drink.name);
    listItemTitle.appendChild(listItemTitleContent);
    listItem.appendChild(listItemTitle);


    mainList_list.appendChild(listItem);

  }

  listenersRenderedDrinks();

}


const removePreviusRenderedDrinks = () => {

  const liList = document.querySelectorAll('.js_drinks');
  for (const item of liList) {
    item.remove();
  }

};