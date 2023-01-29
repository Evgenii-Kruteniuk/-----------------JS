const board = document.querySelector("#board");
//Создадим константу
const colors = [
  "#FF0000",
  "#FF1493",
  "##C71585",
  "#FF4500",
  "#FF8C00",
  "#FFFF00",
  "#B8860B",
  "#800000",
  "#00FF00",
  "#0000FF",
  "#000080",
];
const SQUARES_NUMBER = 1800;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  //Создаем элемент с классом div
  const square = document.createElement("div");
  //Добавляем квадратику класс квадратик
  square.classList.add("square");

  /*На квадрат вешаем слушатель событий, чтобы 
  при наведении на квадрат что-то происходило. В данном
  случае ф-я будет менять цвет*/
  square.addEventListener("mousemove", () => setColor(square));

  /*Теперь что будет происходить когда мышь убираем
  Создадим ф-ю которая будет менять цвет на первоначальный*/
  square.addEventListener("mouseleave", () => removeColor(square));

  /*Обращаемся к  board и говорим -встатить квадрат
  в css в контейнер добавляем св-во flex-wrap: wrap;*/
  board.append(square);
}

function setColor(element) {
  const color = getRandonColor();
  element.style.backgroundColor = color;
  //Добавим тень для квадратиков
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

/*Создаем ф-ю которая будет генерировать наши
 цвета согласно массиву*/
function getRandonColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
