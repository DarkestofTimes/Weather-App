import { displayWeather } from "./displayWeather.js";
import { currentLocation } from "./currentLocation.js";
import { clearMain } from "./renderMain.js";
import { weatherKey } from "./weatherKey.js";

export const fetchWeather = async (location) => {
  const errorElement = document.querySelector(".errorElement");
  const spinnieContainer = document.querySelector(".spinnieContainer");
  const forecast = "/forecast.json";
  const url = new URL("http://api.weatherapi.com/v1" + forecast);
  const key = weatherKey;
  const query = await location;
  const days = 5;
  url.searchParams.set("key", key);
  url.searchParams.set("q", query);
  url.searchParams.set("days", days);
  try {
    spinnieContainer.style.display = "grid";
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    spinnieContainer.style.display = "none";
    errorElement.classList.remove("visible");
    displayWeather(data);
    /* if (response.status === 400) {
      errorElement.classList.add("visible");
      errorElement.textContent = "Does such place even exist?";
    } */
  } catch (err) {
    spinnieContainer.style.display = "none";
    errorElement.classList.add("visible");
    errorElement.textContent = "Fetching went wrong";
    console.log(err, "weatherError");
    setTimeout(() => {
      clearMain();
      fetchWeather(currentLocation);
    }, 2000);
  }
};
