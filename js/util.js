// Функция для проверки, является ли строка палиндромом.
const isPalindrome = (str) => {
  const lowerStr = str.toLowerCase().split(' ').join('');
  if(lowerStr === lowerStr.split('').reverse().join('')) {
    return true;
  }
  return false;
};

isPalindrome ('Лёша на полке клопа нашёл');

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого
// положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

// 1. Приводим исходный параметр к строке (так как могут передать и строку, и число, и вообще что угодно, для
//   чего принят термин payload)
// 2. И применяем метод .replace - большая D найдет нам как раз все КРОМЕ цифр
// флаг g скажет нам обработать все последовательности, а не только первую найденную
// это приводит к тому, что в строке остаются только цифры, или, если цифр не было, то пустая строка
// 3.Оборачиваем это в parseInt: строка, состоящая только из цифр, даст целое число, отбросив нули слева (пример 007),
// а пустая строка (то есть если в исходном были только не-цифры) дает NaN

const numberize = (str) => parseInt(str.toString().replace(/\D/g, ''), 10);
numberize('ECMAScript 2022');
numberize('1 кефир, 0.5 батона');
numberize('агент 007');
numberize('а я томат');
numberize('2023');
numberize('-1');
numberize('1.5');

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// Будет использоваться для генерации временных географических координат в следующем задании. Пример
// использования функции:
const getNumberFromRange = (min, max, numberToFixed) => {
  const numberOfRange = Math.random() * (max - min) + min;
  return numberOfRange.toFixed(numberToFixed);
};
getNumberFromRange (10, 15, 5);

// ГЕНЕРАТОР РАНДОМНОГО ЧИСЛА
const getRandomNumber = (min, max, decimals = 0) => {
  if (min > max) {
    return getRandomNumber(max, min);
  }

  if (min < 0 || max < 0) {
    return getRandomNumber(Math.abs(min), Math.abs(max));
  }

  const result = Math.random() * (max - min + Number(!decimals)) + min;

  return decimals ? result.toFixed(decimals) : Math.floor(result);
};

// ГЕНЕРАТОР ГЕНЕРАТОРА РАНДОМНОГО НЕПОВТОРЯЮЩЕГОСЯ ЧИСЛА
const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    if (previousValues.length === max + 1) {
      return;
    }

    let currentValue = getRandomNumber(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами —
// и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало
// строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная,
// она обрезается с конца.
const padStart = (string, targetLength, padString) => {
  targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
  padString = String(padString || ' ');
  if (string.length > targetLength) {
    return string;
  }

  targetLength = targetLength - string.length;
  if (targetLength > padString.length) {
    //append to original to ensure we are longer than needed
    padString += padString.repeat(targetLength / padString.length);
  }
  return padString.slice(0, targetLength) + string;
};

const getRandomArrayElement = (elements) =>
  elements[getRandomNumber(0, elements.length - 1)];

export {getRandomNumber, createRandomIdFromRangeGenerator, padStart, getRandomArrayElement};
