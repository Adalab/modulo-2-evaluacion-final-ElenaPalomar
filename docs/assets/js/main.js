"use strict";const mainList_list=document.querySelector(".js_mainList_list");let drinks=[];const searchText=document.querySelector(".js_searchText"),searchButton=document.querySelector(".js_searchButton"),mainList=document.querySelector(".js_mainList");let favorites=[];const favoriteList=document.querySelector(".js_favoriteList"),resetSearch=document.querySelector(".js_reset"),favoriteDrinkList=JSON.parse(localStorage.getItem("favoriteDrinkList")),mainContainer=document.querySelector(".main"),errorContainer=document.querySelector(".js_errorContainer");function deleteAllFavorites(){const e=favoriteList.parentElement,r=document.createElement("button"),t=document.createTextNode("Borar todos los favoritos");r.appendChild(t),r.classList.add("resetFavorites"),e.appendChild(r),r.addEventListener("click",(function(e){e.preventDefault(),favorites=[],localStorage.removeItem("favoriteDrinkList"),renderDrinksHtml(),renderFavoritesHtml(favorites)}))}function handleClickSearchButton(e){e.preventDefault();validateInputValue(searchText.value.toLowerCase())}deleteAllFavorites(),null!==favoriteDrinkList&&(favorites=favoriteDrinkList,renderFavoritesHtml(favoriteDrinkList)),searchButton.addEventListener("click",handleClickSearchButton);const errorMessage=e=>{errorContainer.classList.remove("hidden");const r=document.createElement("p");r.classList.add("error__text","js_errorText");const t=document.createTextNode(e);r.appendChild(t),errorContainer.appendChild(r)},eraseErrorMessage=()=>{if(!errorContainer.classList.contains("hidden")){const e=document.querySelectorAll(".js_errorText");for(const r of e)r.remove();errorContainer.classList.add("hidden")}};function validateInputValue(e){""===e?(deletePreviousQueries(),errorMessage("Nada, es inútil. No sé qué será."),errorMessage('Es un acertijo: Di, "cóctel que quieres buscar" y encuentra.')):getFromServer(e)}function getFromServer(e){fetch("https://www.thecocktaildb.com/api/json/v2/1/search.php?s="+e).then(e=>e.json()).then(e=>{const r=e.drinks;null===r?(deletePreviousQueries(),errorMessage("Lo siento. Mis respuestas son limitadas. Haz las consultas correctas.")):(drinks=r.map(e=>({idDrink:e.idDrink,strDrink:e.strDrink,strDrinkThumb:e.strDrinkThumb,strTags:e.strTags})),eraseErrorMessage(),mainList.classList.remove("hidden"),renderDrinksHtml())}).catch(e=>{mainList.classList.add("hidden"),deletePreviousQueries(),errorMessage("No lo intentes. Hazlo o no lo hagas. Pero en este caso inténtalo de nuevo por favor. Hemos tenido un problemilla momentáneo.")})}function renderDrinksHtml(){let e="";console.log(drinks);for(const r of drinks){let t="";t=-1!==favorites.findIndex(e=>e.idDrink===r.idDrink)?"drink--favorite":"",e+=`<li class="drink js_drinks ${t}" id=${r.idDrink}>`,""===r.strDrinkThumb?e+=` <img src='https://via.placeholder.com/210x295/ffffff/666666/?text=img' alt='${r.strDrink}' />`:e+=` <img src='${r.strDrinkThumb}/preview' class="drink__image" alt='${r.strDrink}' />`,e+=` <h3 class="drink__title">${r.strDrink}</h3>`,e+="</li>"}mainList_list.innerHTML=e,listenersRenderedDrinks()}const deletePreviousQueries=()=>{mainList.classList.contains("hidden")?eraseErrorMessage():(mainList_list.innerHTML="",mainList.classList.add("hidden"))};function handleClickResetSearch(e){e.preventDefault(),searchText.value="",deletePreviousQueries()}function addRemoveDrinkToFavorites(e){const r=e.currentTarget.id,t=drinks.find(e=>e.idDrink===r),i=favorites.findIndex(e=>e.idDrink===r);-1===i?favorites.push(t):favorites.splice(i,1)}function handleClickRenderedDrinks(e){addRemoveDrinkToFavorites(e),localStorage.setItem("favoriteDrinkList",JSON.stringify(favorites)),renderDrinksHtml(),renderFavoritesHtml(favorites)}function listenersRenderedDrinks(){const e=document.querySelectorAll(".js_drinks");for(const r of e)r.addEventListener("click",handleClickRenderedDrinks)}function renderFavoritesHtml(e){let r="";for(const t of e)r+=`<li class="favorite js_favorite" id=${t.idDrink}>`,""===t.strDrinkThumb?r+=`  <img src='https://via.placeholder.com/210x295/ffffff/666666/?text=img' class="favorite__image" alt='${t.strDrink}' />`:r+=`  <img src='${t.strDrinkThumb}/preview' class="favorite__image" alt='${t.strDrink}' />`,r+=`  <h3 class="favorite__title">${t.strDrink}</h3>`,r+=`  <button class="deleteFavorite js_deleteFavorite deleteFavorite__icon" id=${t.idDrink}><i class="fa-solid fa-circle-xmark"></i></button>`,r+="</li>";favoriteList.innerHTML=r,listenersDeleteFavoritesButton()}function handleClickDeleteFavorites(e){const r=e.currentTarget.id,t=favorites.findIndex(e=>e.idDrink===r);-1!==t&&favorites.splice(t,1),localStorage.setItem("favoriteDrinkList",JSON.stringify(favorites)),renderFavoritesHtml(favorites),renderDrinksHtml()}function listenersDeleteFavoritesButton(){const e=document.querySelectorAll(".js_deleteFavorite");for(const r of e)r.addEventListener("click",handleClickDeleteFavorites)}resetSearch.addEventListener("click",handleClickResetSearch);