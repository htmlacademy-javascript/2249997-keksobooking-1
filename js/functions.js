// Функция для проверки, является ли строка палиндромом.
const isPolindrom = (str) => {
  const lowerStr = str.toLowerCase().split(' ').join('');
  if(lowerStr === lowerStr.split('').reverse().join('')) {
    return true;
  }
  return false;
};

isPolindrom ('Лёша на полке клопа нашёл');

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого
// положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

// 1. Приводим исходный параметр к строке (так как могут передать и строку, и число, и вообще что угодно, для
//   чего принят термин payload)
// 2. И применяем метод .replace - большая D найдет нам как раз все КРОМЕ цифр
// флаг g скажет нам обработать все последовательности, а не только первую найденную
// это приводит к тому, что в строке остаются только цифры, или, если цифр не было, то пустая строка
// 3.Оборачиваем это в parseInt: строка, состоящая только из цифр, даст целое число, отбросив нули слева (пример 007),
// а пустая строка (то есть если в исходном были только не-цифры) дает NaN

const numberrize = (str) => parseInt(str.toString().replace(/\D/g, ''), 10);
numberrize('ECMAScript 2022');
numberrize('1 кефир, 0.5 батона');
numberrize('агент 007');
numberrize('а я томат');
numberrize('2023');
numberrize('-1');
numberrize('1.5');

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// Будет использоваться для генерации временных географических координат в следующем задании. Пример
// использования функции:
const getNumberFromRange = (min, max, numberToFixed) => {
  const numberOfRange = Math.random() * (max - min) + min;
  return numberOfRange.toFixed(numberToFixed);
};
getNumberFromRange (10, 15, 5);



