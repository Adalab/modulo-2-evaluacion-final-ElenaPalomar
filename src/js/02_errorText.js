'use strict';

// FUNCTIONS

// Function to creater the text of an error message

const errorMessage = (errorTextContent, errorImageURL, errorImageAlt, errorImageTitle) => {

  errorContainer.classList.remove('hidden');

  const errorTag = document.createElement('p');
  errorTag.classList.add('error__text', 'js_errorText');
  const errorText = document.createTextNode(errorTextContent);
  errorTag.appendChild(errorText);
  errorContainer.appendChild(errorTag);

  if (errorImageURL !== undefined) {
    const errorImage = document.createElement('img');
    errorImage.classList.add('error__image', 'js_errorImage');
    errorImage.setAttribute('src', errorImageURL);
    errorImage.setAttribute('alt', errorImageAlt);
    errorImage.setAttribute('title', errorImageTitle);
    errorContainer.appendChild(errorImage);
  }

};


const deleteErrorMessage = () => {

  if (!errorContainer.classList.contains('hidden')) {

    const errorText = document.querySelectorAll('.js_errorText');
    const errorImage = document.querySelector('.js_errorImage');

    for (const item of errorText) {
      item.remove();
    }

    errorImage.remove();

    errorContainer.classList.add('hidden');

  }

};