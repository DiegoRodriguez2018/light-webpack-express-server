import _ from 'lodash';

function component() {
  let element = document.createElement('div');

  element.innerHTML = "Hola Mundo";

  return element;
}

document.body.appendChild(component());