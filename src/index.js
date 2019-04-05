import _ from 'lodash';
import styles from './stylesheets/styles.scss';

function component() {
  let element = document.createElement('div');

  element.innerHTML = "This element was injected with JavaScript.";
  element.classList.add('content');
  return element;
}

document.body.appendChild(component());