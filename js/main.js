import { createObjects } from './data.js';
import { renderOffers } from './render-offers.js';


document.querySelector('#map-canvas')
  .append(renderOffers(createObjects()));
