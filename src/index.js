import { fetchWeather } from "./fetchWeather.js";
import { currentLocation } from "./currentLocation.js";
import { findLocation } from "./findLocation.js";
import { clearMain } from "./renderMain.js";
import "../src/styles.css";

const searchButton = document.querySelector(".searchButton");

fetchWeather(currentLocation);

searchButton.addEventListener("click", (ev) => {
  clearMain();
  ev.preventDefault();
  fetchWeather(findLocation());
});
