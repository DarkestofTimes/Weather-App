import { backgroundColor } from "./backgroundColor.js";
import { renderCover, removeCover } from "./renderCover.js";
import { populateBackground } from "./populateBackground.js";

export const displayDetailsCover = (ev, objects) => {
  renderCover(isSecondCover);
  expand(ev, objects);
};

let originalPosition = [];
let isSecondCover = false;

const expand = (ev, objects) => {
  const targetElement = ev.target;
  originalPosition[isSecondCover ? 1 : 0] =
    targetElement.getBoundingClientRect();

  targetElement.style.position = "fixed";
  targetElement.style.top = originalPosition[isSecondCover ? 1 : 0].top + "px";
  targetElement.style.left =
    originalPosition[isSecondCover ? 1 : 0].left + "px";

  setTimeout(() => {
    targetElement.style.top = 0;
    targetElement.style.left = 0;
  }, 0);
  insertPlaceholder(targetElement);
  targetElement.classList.add(`expand${isSecondCover ? "__c" : ""}`);
  displayCover(ev, objects);
};

const displayCover = (ev, objects) => {
  const coverElement = document.querySelector(
    `.detailsCover${isSecondCover ? "__c" : ""}`
  );
  const targetDay = objects.find((obj) => obj.date === ev.target.dataset.date);

  coverElement.classList.add("expanded");
  coverElement.style.transition = "opacity 0.2s ease 0.7s";
  if (
    ev.target.classList.contains("hourElement") ||
    ev.target.classList.contains("hourElement__c")
  ) {
    populateHourCover(ev, targetDay.hour);
  } else {
    populateDayCover(ev, objects);
  }
  collapseListener();
};

const populateDayCover = (ev, objects) => {
  const coverContainer = document.querySelector(
    `.detailsCover${isSecondCover ? "__c" : ""}`
  );
  const correctDay = objects.find((obj) => obj.date === ev.target.dataset.date);
  coverContainer.style.background = `${backgroundColor(
    correctDay.day.condition.text
  )}`;
  displayLocation(correctDay);
  displayWeather(correctDay.day);
  displayDetails(correctDay.day);
  populateBackground(correctDay.day.condition.text, isSecondCover, false);
  displayHours(ev, objects);
};

const populateHourCover = (ev, object) => {
  const dataContainer = document.querySelector(
    `.dataContainer${isSecondCover ? "__c" : ""}`
  );
  const correctHour = object.find(
    (obj) => obj.time.slice(-5) === ev.target.dataset.hour
  );
  const isNight =
    correctHour.time.slice(-5, -3) <= 6 || correctHour.time.slice(-5, -3) >= 20;
  dataContainer.classList.add(isNight ? "light" : "dark");
  displayLocation(correctHour);
  displayWeather(correctHour);
  displayDetails(correctHour);
  populateBackground(correctHour.condition.text, isSecondCover, isNight);
};

const displayLocation = (object) => {
  const localDate = document.querySelector(
    `.localDate${isSecondCover ? "__b" : "__c"}`
  );
  const localTime = document.querySelector(
    `.localTime${isSecondCover ? "__b" : "__c"}`
  );
  if (object.time) {
    const newDateObject = new Date(object.time);
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
    };
    const formatDate = newDateObject.toLocaleDateString(undefined, options);
    localDate.textContent = formatDate;
    localTime.textContent = object.time.slice(10);
  } else {
    const newDateObject = new Date(object.date);
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
    };
    const formatDate = newDateObject.toLocaleDateString(undefined, options);
    localDate.textContent = formatDate;
    localTime.textContent = "";
  }
};

const displayWeather = (object) => {
  const temperature = document.querySelector(
    `.temperature${isSecondCover ? "__b" : "__c"}`
  );
  const weatherType = document.querySelector(
    `.weatherType${isSecondCover ? "__b" : "__c"}`
  );
  if (object.temp_c) {
    temperature.textContent = object.temp_c + "C";
  } else {
    temperature.textContent = object.avgtemp_c + "C";
  }

  weatherType.textContent = object.condition.text;
};

const displayDetails = (object) => {
  const feelsLike = document.querySelector(
    `.feelsLike${isSecondCover ? "__b" : "__c"}`
  );
  const humidity = document.querySelector(
    `.humidity${isSecondCover ? "__b" : "__c"}`
  );
  const windSTR = document.querySelector(
    `.windSTR${isSecondCover ? "__b" : "__c"}`
  );
  const windDIR = document.querySelector(
    `.windDIR${isSecondCover ? "__b" : "__c"}`
  );
  const gust = document.querySelector(`.gust${isSecondCover ? "__b" : "__c"}`);
  const vis = document.querySelector(`.vis${isSecondCover ? "__b" : "__c"}`);
  const precip = document.querySelector(
    `.precip${isSecondCover ? "__b" : "__c"}`
  );
  const UV = document.querySelector(`.UV${isSecondCover ? "__b" : "__c"}`);
  const pressure = document.querySelector(
    `.pressure${isSecondCover ? "__b" : "__c"}`
  );
  if (object.feelslike_c) {
    feelsLike.insertAdjacentText("beforeend", `\n ${object.feelslike_c}C`);
    humidity.insertAdjacentText("beforeend", `\n ${object.humidity}%`);
    windSTR.insertAdjacentText("beforeend", `\n ${object.wind_kph}kph`);
    windDIR.insertAdjacentText(
      "beforeend",
      `\n ${object.wind_dir}, ${object.wind_degree}deg`
    );
    gust.insertAdjacentText("beforeend", `\n ${object.gust_kph}kph`);
    vis.insertAdjacentText("beforeend", `\n ${object.vis_km}km`);
    precip.insertAdjacentText("beforeend", `\n ${object.precip_mm}mm`);
    UV.insertAdjacentText("beforeend", `\n ${object.uv}`);
    pressure.insertAdjacentText("beforeend", `\n ${object.pressure_mb}mb`);
  } else {
    const minTempSpan = document.querySelector(".feelsLike__c span");
    const maxTempSpan = document.querySelector(".windDIR__c span");
    const rainChanceSpan = document.querySelector(".gust__c span");
    minTempSpan.textContent = "Min Temp:";
    maxTempSpan.textContent = "Max Temp:";
    rainChanceSpan.textContent = `${
      object.daily_chance_of_rain >= object.daily_chance_of_snow
        ? "Chance of rain:"
        : "Chance of snow:"
    }`;
    feelsLike.insertAdjacentText("beforeend", `\n ${object.mintemp_c}C`);
    windDIR.insertAdjacentText("beforeend", `\n ${object.maxtemp_c}C`);
    precip.insertAdjacentText("beforeend", `\n ${object.totalprecip_mm}mm`);
    windSTR.insertAdjacentText("beforeend", `\n ${object.maxwind_kph}kph`);
    humidity.insertAdjacentText("beforeend", `\n ${object.avghumidity}%`);
    vis.insertAdjacentText("beforeend", `\n ${object.avgvis_km}km`);
    UV.insertAdjacentText("beforeend", `\n ${object.uv}`);
    rainChanceSpan.insertAdjacentText(
      "beforeend",
      ` ${
        object.daily_chance_of_rain >= object.daily_chance_of_snow
          ? object.daily_chance_of_rain
          : object.daily_chance_of_snow
      }`
    );
  }
};

const collapseListener = () => {
  const collapseCover = document.querySelector(
    `.collapseCover${isSecondCover ? "__c" : ""}`
  );
  collapseCover.addEventListener("click", collapse);
};

const collapse = () => {
  const targetElement = document.querySelector(
    `.expand${isSecondCover ? "__c" : ""}`
  );
  const coverElement = document.querySelector(
    `.detailsCover${isSecondCover ? "__c" : ""}`
  );
  coverElement.classList.remove("expanded");
  targetElement.classList.remove(`expand${isSecondCover ? "__c" : ""}`);
  targetElement.style.top = originalPosition[isSecondCover ? 1 : 0].top + "px";
  targetElement.style.left =
    originalPosition[isSecondCover ? 1 : 0].left + "px";
  setTimeout(() => {
    targetElement.style.position = "static";
    removePlaceholder();
    isSecondCover = false;
  }, 700);

  coverElement.style.transition = "opacity 0s ease";
  removeCover(isSecondCover);
};

const insertPlaceholder = (targetElement) => {
  const placeholder = document.createElement("div");
  placeholder.classList.add("hourElement");
  placeholder.classList.add(`placeholder${isSecondCover ? "__c" : ""}`);
  targetElement.parentNode.insertBefore(placeholder, targetElement);
};

const removePlaceholder = () => {
  const placeholder = document.querySelector(
    `.placeholder${isSecondCover ? "__c" : ""}`
  );
  placeholder.remove();
};

export const displayHours = (ev, objects) => {
  const forecastContainer = document.querySelector(".forecastContainer__c");
  const currentDate = new Date();
  currentDate.setMinutes(0);

  objects.forEach((day) => {
    if (ev.target.dataset.date == day.date) {
      day.hour.forEach((hour) => {
        const isNight =
          hour.time.slice(-5, -3) <= 6 || hour.time.slice(-5, -3) >= 20;
        const hourElement = `<div class="hourElement__c" data-hour="${hour.time.slice(
          -5
        )}" data-date="${day.date}" style="background: ${backgroundColor(
          isNight ? "Clear" : hour.condition.text
        )}">
      <p class="hour">${hour.time.slice(-5)}</p>
      <img src="${hour.condition.icon}" alt="${
          hour.condition.text
        }" class="hourIcon" width="50" height="50" />
      <p class="hourTemp">${hour.temp_c}C</p>
      <p class="wind">${hour.wind_dir}, ${hour.wind_kph}kph</p>
    </div>`;
        forecastContainer.insertAdjacentHTML("beforeend", hourElement);
      });
    }
  });
  hourListeners(objects);
};

const hourListeners = (objects) => {
  const hourElements = document.querySelectorAll(".hourElement__c");
  hourElements.forEach((element) => {
    const clickHandler = (ev) => {
      isSecondCover = true;
      displayDetailsCover(ev, objects);
    };
    element.removeEventListener("click", clickHandler);
    element.addEventListener("click", clickHandler);
  });
};
