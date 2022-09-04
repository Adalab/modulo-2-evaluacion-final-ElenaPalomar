'use strict';


// Function to render drinks list into Html
function renderDrinks(list) {

  removePreviusInitialDrinks();

  for (const drink of list) {

    const liItem = createLiItem('drink', 'js_drinks', drink);

    favoriteDrink(drink, liItem);

    const itemImage = createImgItem(drink, 'drink__image');
    liItem.appendChild(itemImage);

    const itemTitle = createh3Item('drink__title', drink);
    liItem.appendChild(itemTitle);

    searchList.appendChild(liItem);

  }

  listenersRenderedDrinks();

}


deletePreviusRenderedDrinks();