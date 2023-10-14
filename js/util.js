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

export {getRandomNumber, createRandomIdFromRangeGenerator, padStart};
