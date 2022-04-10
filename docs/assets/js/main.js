"use strict";const mainList=document.querySelector(".js_mainList");let drinks=[];const searchText=document.querySelector(".js_searchText"),searchButton=document.querySelector(".js_searchButton");let favorites=[];function handleClickSearchButton(e){e.preventDefault();const n=searchText.value;fetch("https://www.thecocktaildb.com/api/json/v2/1/search.php?s="+n).then(e=>e.json()).then(e=>{drinks=e.drinks,renderDrinksHtml()})}function handleClickRenderedDrinks(e){const n=e.currentTarget.id,r=drinks.find(e=>e.idDrink===n),t=favorites.findIndex(e=>e.idDrink===n);-1===t?favorites.push(r):favorites.splice(t,1),renderDrinksHtml()}function listenersRenderedDrinks(){const e=document.querySelectorAll(".js_drinks");for(const n of e)n.addEventListener("click",handleClickRenderedDrinks)}function renderDrinksHtml(){let e="";for(const n of drinks){let r="";r=-1!==favorites.findIndex(e=>e.idDrink===n.idDrink)?"drink--favorite":"",e+=`<li class="drink js_drinks ${r}" id=${n.idDrink}>`,""===n.strDrinkThumb?e+=` <img src='https://via.placeholder.com/210x295/ffffff/666666/?text=img' alt='${n.strDrink}' />`:e+=` <img src='${n.strDrinkThumb}/preview' alt='${n.strDrink}' />`,e+=` <h3>${n.strDrink}</h3>`,e+="</li>"}mainList.innerHTML=e,listenersRenderedDrinks()}searchButton.addEventListener("click",handleClickSearchButton);