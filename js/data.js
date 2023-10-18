import {getRandomNumber, createRandomIdFromRangeGenerator, padStart, getRandomArrayElement} from './util.js';

const OFFER_TITLES = [
  'Супер оказия',
  'Внимание внимание',
  'Ограниченное предложение',
  'Супер возможность',
  'Поторопись',
];

const OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const OFFER_CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const OFFER_CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const OFFER_DESCRIPTIONS = [
  'Светлое помещение',
  'Просторная комната',
  'Уютный дом',
  'Маленькая квартира',
  'Огромная дача',
  'Прекрасный домик',
];

const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const SIMILAR_OBJECT_COUNT = 10;

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
      address: '${lat} ${lng}',
      price: getRandomNumber(1000, 10000),
      type: getRandomArrayElement(OFFER_TYPES),
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
