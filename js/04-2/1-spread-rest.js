// ...spread - распыление
const temperatures = [18, 14, 12, 21, 17, 29];
const min = Math.min(...temperatures); // (18, 14, 12, 21, 17, 29)

// const newTemps = temperatures.concat([1, 2, 3]);
const newTemps = [...temperatures, 1, 2, 3];
console.log(newTemps);

const lastWeekTemps = [1, 2, 3];
const currentTemps = [6, 10, 8];
const nextWeekTemps = [12, 14, -1.5];
const temps = [...lastWeekTemps, ":]", ...currentTemps, "too hot", ...nextWeekTemps];
console.log(temps);

// слева всегда rest = справа всегда spread !!!
// ...rest - сбор
const fn = function (){}







// const add = function (...args) {
//   console.log(args); // массив всех аргументов
// };

// add(1, 2, 3);
// add(1, 2, 3, 4, 5);
