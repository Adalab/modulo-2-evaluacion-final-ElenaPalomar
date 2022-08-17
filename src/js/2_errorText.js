'use strict';

// FUNCTIONS

// Function to creater the text of an error message

const errorMessage = (errorTextContent) => {

  errorContainer.classList.remove('hidden');

  const errorTag = document.createElement('p');
  errorTag.classList.add('error__text', 'js_errorText');
  const errorText = document.createTextNode(errorTextContent);
  errorTag.appendChild(errorText);
  errorContainer.appendChild(errorTag);

};


const eraseErrorMessage = () => {

  if (!errorContainer.classList.contains('hidden')) {

    const errorText = document.querySelectorAll('.js_errorText');

    for (const item of errorText) {
      item.remove();
    }

    errorContainer.classList.add('hidden');

  }

};