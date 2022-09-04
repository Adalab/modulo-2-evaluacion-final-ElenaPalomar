'use strict';

// Function to create a 'li' item

const createLiItem = (firstClass, SecondClass, object) => {

  const liItem = document.createElement('li');
  liItem.classList.add(firstClass, SecondClass);
  liItem.setAttribute('id', object.id);

  return liItem;

};


// Function to create a 'img' item

const createImgItem = (object, imgClass) => {

  const itemImage = document.createElement('img');

  if (object.image === '') {

    itemImage.setAttribute('src', 'https://via.placeholder.com/210x295/ffffff/666666/?text=img');
    itemImage.setAttribute('alt', object.name);
    itemImage.classList.add(imgClass);

  } else {

    itemImage.setAttribute('src', `${object.image}/preview`);
    itemImage.setAttribute('alt', object.name);
    itemImage.classList.add(imgClass);

  }

  return itemImage;

};


// Function to create a 'h3' item

const createh3Item = (titleClass, object) => {

  const itemTitle = document.createElement('h3');
  itemTitle.classList.add(titleClass);
  const itemTitleContent = document.createTextNode(object.name);
  itemTitle.appendChild(itemTitleContent);

  return itemTitle;

};


// Function to search for an item in favorite's list and if it is, add favorite class to mark it as favorite

const favoriteDrink = (object, item) => {

  const foundFavoriteIndex = favorites.findIndex(item => {
    return item.id === object.id;
  });

  if (foundFavoriteIndex !== -1) {
    item.classList.add('drink--favorite');
  }

};


// Function to delete previous queries

const deletePreviusRenderedDrinks = () => {

  const liList = document.querySelectorAll('.js_drinks');
  for (const item of liList) {
    item.remove();
  }

};