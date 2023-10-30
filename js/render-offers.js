import { fillElement } from './util.js';


const offerTemplate = document.querySelector('#card').content.querySelector('.popup');


const renderOffer = ({author, offer}) => {
  const offerElement = offerTemplate.cloneNode(true);
  offerElement.querySelector('.popup__title').textContent = offer.title;
  offerElement.querySelector('.popup__text--address').textContent = offer.address;
  offerElement.querySelector('.popup__text--price').textContent = `${offer.price}₽/ночь`;
  offerElement.querySelector('.popup__type').textContent = offer.type;
  offerElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

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
  offerElement.querySelector('.popup__avatar').src = author.avatar;

  return offerElement;
};

const renderOffers = (offers) => {
  const similarOfferFragment = document.createDocumentFragment();

  offers.forEach((offer) => {
    similarOfferFragment.append(renderOffer(offer));
  });

  return similarOfferFragment;
};

export {renderOffers, renderOffer};
