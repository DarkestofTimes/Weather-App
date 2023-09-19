import { populateBackground } from "./populateBackground.js";
import { backgroundColor } from "./backgroundColor.js";

export const showoff = () => {
  const showoffBtn = document.querySelector(".showoff");
  const conditions = [
    "Blizzard",
    "Moderate or heavy rain with thunder",
    "Moderate or heavy showers of ice pellets",
    "Fog",
    "Blowing snow",
    "Patchy heavy snow",
  ];
  let i = 0;

  showoffBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    engageWeather(conditions[i]);
    console.log(i);
    i++;
    if (i >= conditions.length) {
      i = 0;
    }
  });
};

const engageWeather = (conditions) => {
  const background = document.querySelector(".background");
  clearBackground();
  populateBackground(conditions, false, false);
  background.style.background = `${backgroundColor(conditions)}`;
};

const clearBackground = () => {
  const background = document.querySelector(".backgroundContainer");
  while (background.firstChild) {
    background.removeChild(background.firstChild);
  }
};
