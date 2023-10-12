// ГЕНЕРАТОР РАНДОМНОГО НЕПОВТОРЯЮЩЕГОСЯ ЧИСЛА
function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];
  if (previousValues.length === max) {
    throw .Error('Все возможные значения использованы');
  }
  return function () {
    let currentValue = getRandomInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}
