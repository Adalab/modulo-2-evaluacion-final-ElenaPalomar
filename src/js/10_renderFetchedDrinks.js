'use strict';

// Function to render drinks list into Html
function renderDrinks() {

  listsContainer.classList.remove('hidden');
  deletePreviusInitialDrinks();

  for (const drink of drinks) {

    const liItem = createLiItem('drink', 'js_drinks', drink);

    const itemButton = createButtonItem('addRemoveFavorite', 'js_addRemoveFavorite', drink, 'addRemoveFavorite__icon', 'heart');
    liItem.appendChild(itemButton);

    favoriteDrink(drink, liItem, itemButton);

    const itemImage = createImgItem(drink, 'drink__image');
    liItem.appendChild(itemImage);

    const itemTitle = createh3Item('drink__title', drink);
    liItem.appendChild(itemTitle);

    searchList.appendChild(liItem);

  }

  listenersRenderedDrinks();

}