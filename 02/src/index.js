import { data } from './data.js';
import { combineAge, renderAge } from './helpers.js';

console.log(combineAge(data));
const container = document.querySelector('#age');
renderAge(container, data);
