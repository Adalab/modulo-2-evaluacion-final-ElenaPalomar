'use strict';

// Function to render drinks list into Html
function renderInitialDrinks() {

  for (const drink of initialDrinks) {

    const liItem = createLiItem('drink', 'js_initialDrinks', drink);

    favoriteDrink(drink, liItem);

    const itemImage = createImgItem(drink, 'drink__image');
    liItem.appendChild(itemImage);

    const itemTitle = createh3Item('drink__title', drink);
    liItem.appendChild(itemTitle);


    searchList.appendChild(liItem);

  }

  listenersRenderedInitialDrinks();

}