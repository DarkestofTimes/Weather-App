import { displayHourly } from "./displayHourly.js";
import { displayDaily } from "./displayDaily.js";
import { clearForecast } from "./clearForecast.js";
import { displayDetailsCover } from "./displayDetailsCover.js";

export const toggleDayOrHour = (object) => {
  const toggleComponent = document.querySelector(".toggleComponent");
  toggleComponent.addEventListener("click", () => changePosition(object));
  displayHourly(object.forecast.forecastday);
  hourListeners(object.forecast.forecastday);
};

const changePosition = (object) => {
  const toggleBtn = document.querySelector(".toggleBtn");
  if (toggleBtn.classList.contains("left")) {
    toggleBtn.classList.remove("left");
    toggleBtn.classList.add("right");
    clearForecast();
    displayDaily(object.forecast.forecastday);
    dayListeners(object.forecast.forecastday);
  } else {
    toggleBtn.classList.remove("right");
    toggleBtn.classList.add("left");
    clearForecast();
    displayHourly(object.forecast.forecastday);
    hourListeners(object.forecast.forecastday);
  }
};

const hourListeners = (object) => {
  const hourElements = document.querySelectorAll(".hourElement");
  hourElements.forEach((element) => {
    const clickHandler = (event) => {
      displayDetailsCover(event, object);
    };
    element.removeEventListener("click", clickHandler);
    element.addEventListener("click", clickHandler);
  });
};

const dayListeners = (object) => {
  const dayElements = document.querySelectorAll(".dayElement");
  dayElements.forEach((element) => {
    const clickHandler = (event) => {
      displayDetailsCover(event, object);
    };
    element.removeEventListener("click", clickHandler);
    element.addEventListener("click", clickHandler);
  });
};
