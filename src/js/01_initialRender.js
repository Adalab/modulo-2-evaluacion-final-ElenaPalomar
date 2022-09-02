'use strict';

// Function to access the server, save the infomation in an array and render the drinks in HTML
function initialGetFromServer() {

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass`)
    .then(response => response.json())
    .then(data => {

      const dataInitialDrinks = data.drinks;

      initialDrinks = dataInitialDrinks.map(item => {
        return {
          id: item.idDrink,
          name: item.strDrink,
          image: item.strDrinkThumb
        };
      });


      // Función to generate a random number to sort the cocktails randomly
      const random = () => Math.random() - 0.5;

      const randomInitialDrinks = initialDrinks.sort(random);

      const reducedRandomInitialDrinks = randomInitialDrinks.splice(7, 20);

      initialDrinks = reducedRandomInitialDrinks;


      deletePreviousQueries();
      renderInitialDrinks(initialDrinks);

      searchTitle.innerHTML = 'Algunos cócteles';

    })
    .catch((error) => {

      searchContainer.classList.add('hidden');

      deletePreviousQueries();
      deleteErrorMessage();

      errorMessage('No lo intentes. Hazlo o no lo hagas. Pero en este caso inténtalo de nuevo por favor. Hemos tenido un problemilla momentáneo.', './assets/images/noTrys.jpg', 'Yoda', 'El imperio contrataca - Yoda enseñando a luke a usar la fuerza - "No lo intentes. Hazlo o no lo hagas. Pero no lo intentes."');

    });
}


initialGetFromServer();


function renderInitialDrinks(list) {

  for (const drink of list) {

    const foundFavoriteIndex = favorites.findIndex(item => {
      return item.id === drink.id;
    });


    const listItem = document.createElement('li');
    listItem.classList.add('drink', 'js_initialDrink');

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


    searchList.appendChild(listItem);

  }

  listenersInitialDrinks();

}


const removePreviusInitialDrinks = () => {

  const liList = document.querySelectorAll('.js_initialDrink');
  for (const item of liList) {
    item.remove();
  }

};