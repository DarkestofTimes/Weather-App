import { toggleDayOrHour } from "./toggleDayOrHour.js";
import { backgroundColor } from "./backgroundColor.js";
import { renderMain } from "./renderMain.js";
import { populateBackground } from "./populateBackground.js";
import { showoff } from "./showoff.js";

export const displayWeather = (object) => {
  renderMain();
  displayLocation(object);
  displayCurrentWeather(object);
  displayDetails(object);
  toggleDayOrHour(object);
  showoff();
};

const displayLocation = (object) => {
  const locationCity = document.querySelector(".locationCity");
  const locationCountry = document.querySelector(".locationCountry");
  const localDate = document.querySelector(".localDate");
  const localTime = document.querySelector(".localTime");

  const newDateObject = new Date(object.location.localtime);
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const formatDate = newDateObject.toLocaleDateString(undefined, options);

  locationCity.textContent = object.location.name;
  locationCountry.textContent = object.location.country;
  localDate.textContent = formatDate;
  localTime.textContent = object.location.localtime.slice(10);
};

const displayCurrentWeather = (object) => {
  const isNight =
    object.location.localtime.slice(-5, -3) <= 6 ||
    object.location.localtime.slice(-5, -3) >= 20;
  const mainContainer = document.querySelector(".mainContainer");
  mainContainer.classList.add(isNight ? "light" : "dark");

  const temperature = document.querySelector(".temperature");
  const weatherType = document.querySelector(".weatherType");
  const background = document.querySelector(".background");

  temperature.textContent = object.current.temp_c + "C";
  weatherType.textContent = object.current.condition.text;
  background.style.background = `${backgroundColor(
    isNight ? "Clear" : object.current.condition.text
  )}`;
  populateBackground(object.current.condition.text, false, isNight);
};

const displayDetails = (object) => {
  const feelsLike = document.querySelector(".feelsLike");
  const humidity = document.querySelector(".humidity");
  const windSTR = document.querySelector(".windSTR");
  const windDIR = document.querySelector(".windDIR");
  const gust = document.querySelector(".gust");
  const vis = document.querySelector(".vis");
  const precip = document.querySelector(".precip");
  const UV = document.querySelector(".UV");
  const pressure = document.querySelector(".pressure");

  feelsLike.insertAdjacentText(
    "beforeend",
    `\n ${object.current.feelslike_c}C`
  );
  humidity.insertAdjacentText("beforeend", `\n ${object.current.humidity}%`);
  windSTR.insertAdjacentText("beforeend", `\n ${object.current.wind_kph}kph`);
  windDIR.insertAdjacentText(
    "beforeend",
    `\n ${object.current.wind_dir}, ${object.current.wind_degree}deg`
  );
  gust.insertAdjacentText("beforeend", `\n ${object.current.gust_kph}kph`);
  vis.insertAdjacentText("beforeend", `\n ${object.current.vis_km}km`);
  precip.insertAdjacentText("beforeend", `\n ${object.current.precip_mm}mm`);
  UV.insertAdjacentText("beforeend", `\n ${object.current.uv}`);
  pressure.insertAdjacentText(
    "beforeend",
    `\n ${object.current.pressure_mb}mb`
  );
};
