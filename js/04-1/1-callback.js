// Функция обратного вызова (callback) и функция высшего порядка (hof)

const greet = function (name) {
  console.log(`Hello ${name}`);
};

const greetWithName = function (callback) {
  const name = "Iliya";
  callback(name);
};

greetWithName(greet);

// Отложенный вызов - регистрация событий
const buttonRef = document.querySelector("button");

const handleButtonClick = function () {
  console.log("Click!");
};

buttonRef.addEventListener("click", handleButtonClick);

// Отложенный вызов - интервалы
// console.log("В коде перед таймаутом");

// setTimeout(function () {
//   console.log("Через 3 секунды внутри колбека в таймауте");
// }, 3000);

// console.log("В коде после таймаута");

// Отложенный вызов - http-запрос
const handleFetchSuccess = (data) => console.log(data);

console.log("Перед фетч");

fetch("https://swapi.dev/api/people/2/")
  .then((res) => res.json())
  .then(handleFetchSuccess);

console.log("После фетч");
