import {getRandomNumber, createRandomIdFromRangeGenerator, padStart, getRandomArrayElement} from './util.js';
import {OFFER_TITLES, OFFER_CHECKINS, OFFER_CHECKOUTS, OFFER_DESCRIPTIONS, OFFER_FEATURES, OFFER_PHOTOS, OFFER_TYPES} from './constants.js';

const SIMILAR_OBJECT_COUNT = 10;
const offerTypesKeys = Object.keys(OFFER_TYPES);
const generateRandomFeatureFromRange = createRandomIdFromRangeGenerator(0, OFFER_FEATURES.length - 1);

// СОЗДАЕМ ЕДИНИЧНЫЙ ОБЪЕКТ
const createObject = (index) => {
  const lat = getRandomNumber(35.65, 35.7, 5);
  const lng = getRandomNumber(139.7, 139.8, 5);

  return {
    author: {
      avatar: `img/avatars/user${padStart(`${index}`, 2, '0')}.png`,
    },
    offer: {
      title: getRandomArrayElement(OFFER_TITLES),
      // eslint-disable-next-line no-template-curly-in-string
      address: `${lat} ${lng}`,
      price: getRandomNumber(1000, 10000),
      type: getRandomArrayElement(offerTypesKeys),
      rooms: getRandomNumber(1, 5),
      guests: getRandomNumber(1, 10),
      checkin: getRandomArrayElement(OFFER_CHECKINS),
      checkout: getRandomArrayElement(OFFER_CHECKOUTS),
      features: Array.from({ length: getRandomNumber(1, OFFER_FEATURES.length) }, () => OFFER_FEATURES[generateRandomFeatureFromRange()]),
      description: getRandomArrayElement(OFFER_DESCRIPTIONS),
      photos: Array.from({ length: getRandomNumber(1, 15) }, () =>
        getRandomArrayElement(OFFER_PHOTOS)
      ),
    },
    location: { lat, lng },
  };

};

const createObjects = (length = SIMILAR_OBJECT_COUNT) =>
  Array.from({ length }, (item, i) => createObject(i + 1));

export {createObject, createObjects};
