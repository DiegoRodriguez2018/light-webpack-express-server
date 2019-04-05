import _ from 'lodash';
import styles from './stylesheets/styles.scss';

function component() {
  let element = document.createElement('div');

  element.innerHTML = "Hola Mundo";

  return element;
}

document.body.appendChild(component());