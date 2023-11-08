window.setInterval(function () {
  const dateBlock = document.querySelector(".date");
  const date = new Date();
  const mounth = date.getMonth();
  const day = date.getDay();
  const dayNamber = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  let mounthsName = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ];
  let daysName = [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
    "Неділя",
  ];
  let monthIndex = mounthsName[mounth];
  let dayIndex = daysName[day];
  let formattedMinute = minute < 10 ? "0" + minute : minute;
  dateBlock.innerHTML = `${monthIndex} , ${dayIndex} ${dayNamber}, ${hour} : ${formattedMinute}`;
});
document.addEventListener("DOMContentLoaded", () => {
  showWaether("LVIV");
});

let container = document.querySelector(".container");
let boxWeather = document.querySelector(".weathers");
let spanName = document.querySelector(".sityname");
let input = document.querySelector(".input");
let button = document.querySelector(".button");
let foto = document.querySelector(".foto4ka");
let properties = document.querySelector(".properties");

foto.addEventListener("click", () => {
  properties.classList.remove("z-index");
  input.classList.remove("none");
  button.classList.remove("none");
});
button.addEventListener("click", () => {
  showWaether(input.value);
  if (input.value) {
    properties.classList.add("z-index");
    input.classList.add("none");
    button.classList.add("none");
  }
  input.value = "";
});
function showWaether(value) {
  // let link = `http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=5d066958a60d315387d9492393935c19`
  )
    .then((response) => response.json())
    .then((weathers) => {
      boxWeather.innerHTML = `<img  class="pogoda" src="http://openweathermap.org/img/w/${weathers.weather[0].icon}.png"/><span>${weathers.main.temp}  &#176 С</span>`;
      let res = weathers.main.temp;
      spanName.textContent = `${weathers.name}`;
      if (res > 30) {
        container.classList.add("red");
      } else {
        container.classList.remove("red");
      }
    });
}

// let link =
//   "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";
// fetch(link)
//   .then((response) => response.json())
//   .then((weather) => console.log(weather));
