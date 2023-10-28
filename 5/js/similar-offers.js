import { createObjects } from './data.js';
import { fillElement } from './util.js';

const map = document.querySelector('#map-canvas');

const offerTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarOffers = createObjects();

const similarOfferFragment = document.createDocumentFragment();

similarOffers.forEach(({author, offer}) => {
  const offerElement = offerTemplate.cloneNode(true);
  offerElement.querySelector('.popup__title').textContent = offer.title;
  offerElement.querySelector('.popup__text--address').textContent = offer.address;
  offerElement.querySelector('.popup__text--price').textContent = `${offer.price }₽/ночь`;
  offerElement.querySelector('.popup__type').textContent = offer.type;
  offerElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms } комнаты для ${ offer.guests } гостей`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${ offer.checkin }, выезд до ${ offer.checkout}`;

  // offerElement.querySelector('.popup__features').innerHTML = offer.features.map((feature) =>
  //   `<li class="popup__feature popup__feature--${feature}"></li>`
  // ).join('');
  fillElement(
    offerElement.querySelector('.popup__features'),
    offer.features,
    (feature) => `<li class="popup__feature popup__feature--${feature}"></li>`
  );

  fillElement(
    offerElement.querySelector('.popup__photos'),
    offer.photos,
    (photo) => `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`
  );

  offerElement.querySelector('.popup__description').textContent = offer.description;

  // offerElement.querySelector('.popup__photos').innerHTML = offer.photos.map((photo) =>
  //   `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`).join('');

  offerElement.querySelector('.popup__avatar').src = author.avatar;


  similarOfferFragment.appendChild(offerElement);
});

map.appendChild(similarOfferFragment);
console.log(map);
