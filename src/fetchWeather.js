import { displayWeather } from "./displayWeather.js";
import { currentLocation } from "./currentLocation.js";
import { clearMain } from "./renderMain.js";

export const fetchWeather = async (location) => {
  const errorElement = document.querySelector(".errorElement");
  const spinnieContainer = document.querySelector(".spinnieContainer");
  const url = `https://node-api-relay.onrender.com/weather/${await location}`;
  try {
    spinnieContainer.style.display = "grid";
    const response = await fetch(url);
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
