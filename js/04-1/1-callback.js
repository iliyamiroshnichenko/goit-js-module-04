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
}

buttonRef.addEventListener("click", handleButtonClick);

// Отложенный вызов - интервалы
