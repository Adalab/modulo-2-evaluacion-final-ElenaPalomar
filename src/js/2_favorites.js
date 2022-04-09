'use strict';

function handleClickRenderedDrinks(event) {
  console.log(event.target);
  console.log(event.currentTarget);
};



function listenersRenderedDrinks() {
  // Listener cocktail event
  const renderedDrinks = document.querySelectorAll('.js_drinks');

  for (const item of renderedDrinks) {
    item.addEventListener('click', handleClickRenderedDrinks);
  }
}