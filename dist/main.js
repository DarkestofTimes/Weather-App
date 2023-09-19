/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/backgroundColor.js":
/*!********************************!*\
  !*** ./src/backgroundColor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundColor: () => (/* binding */ backgroundColor)
/* harmony export */ });
const backgroundColor = (object) => {
  const backgroundColors = {
    Sunny: "linear-gradient(skyblue, rgb(179, 179, 179))",
    Clear: "linear-gradient(rgb(28, 24, 55), rgb(17, 15, 32))",
    "Partly cloudy": "linear-gradient(skyblue, rgb(179, 179, 179))",
    Cloudy: "linear-gradient(rgb(181, 181, 181), rgb(112, 112, 112))",
    Overcast: "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    Mist: "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Patchy rain possible":
      "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Patchy snow possible": "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Patchy sleet possible": "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Patchy freezing drizzle possible":
      "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Thundery outbreaks possible":
      "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Blowing snow": "linear-gradient(rgb(214, 214, 214), rgb(121, 121, 121))",
    Blizzard: "linear-gradient(rgb(214, 214, 214), rgb(121, 121, 121))",
    Fog: "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Freezing fog": "linear-gradient(rgb(214, 214, 214), rgb(121, 121, 121))",
    "Patchy light drizzle": "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Light drizzle": "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Freezing drizzle": "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Heavy freezing drizzle":
      "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Patchy light rain": "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Light rain": "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Moderate rain at times":
      "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Moderate rain": "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Heavy rain at times": "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Heavy rain": "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Light freezing rain":
      "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Moderate or heavy freezing rain":
      "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Light sleet": "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Moderate or heavy sleet":
      "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Patchy light snow": "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Light snow": "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Patchy moderate snow": "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Moderate snow": "linear-gradient(rgb(214, 214, 214), rgb(121, 121, 121))",
    "Patchy heavy snow":
      "linear-gradient(rgb(214, 214, 214), rgb(121, 121, 121))",
    "Heavy snow": "linear-gradient(rgb(214, 214, 214), rgb(121, 121, 121))",
    "Ice pellets": "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Light rain shower": "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Moderate or heavy rain shower":
      "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Torrential rain shower":
      "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Light sleet showers": "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Moderate or heavy sleet showers":
      "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Light snow showers":
      "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Moderate or heavy snow showers":
      "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Light showers of ice pellets":
      "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
    "Moderate or heavy showers of ice pellets":
      "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Patchy light rain with thunder":
      "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Moderate or heavy rain with thunder":
      "linear-gradient(rgb(75, 75, 75), rgb(54, 54, 54))",
    "Patchy light snow with thunder":
      "linear-gradient(skyblue, rgb(179, 179, 179))",
    "Moderate or heavy snow with thunder":
      "linear-gradient(rgb(181, 181, 181), rgb(78, 78, 78))",
  };
  return backgroundColors[object];
};


/***/ }),

/***/ "./src/clearForecast.js":
/*!******************************!*\
  !*** ./src/clearForecast.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearForecast: () => (/* binding */ clearForecast)
/* harmony export */ });
const clearForecast = () => {
  const forecastContainer = document.querySelectorAll(".forecastContainer");
  forecastContainer.forEach((container) => {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  });
};


/***/ }),

/***/ "./src/currentLocation.js":
/*!********************************!*\
  !*** ./src/currentLocation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentLocation: () => (/* binding */ currentLocation)
/* harmony export */ });
const checkIfLocationAvailable = () => {
  if ("geolocation" in navigator) {
    return true;
  } else {
    return false;
  }
};

const getCoords = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const getLocation = async () => {
  if (checkIfLocationAvailable()) {
    try {
      const location = await getCoords();
      const lat = location.coords.latitude;
      const long = location.coords.longitude;
      if (location) {
        return `${lat}, ${long}`;
      }
    } catch (err) {
      console.log(err, "locationError");
      return "auto:ip";
    }
  }
};

const currentLocation = getLocation();


/***/ }),

/***/ "./src/displayDaily.js":
/*!*****************************!*\
  !*** ./src/displayDaily.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayDaily: () => (/* binding */ displayDaily)
/* harmony export */ });
/* harmony import */ var _backgroundColor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backgroundColor.js */ "./src/backgroundColor.js");


const displayDaily = (array) => {
  const forecastContainer = document.querySelectorAll(".forecastContainer");
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  array.forEach((day) => {
    const dayDate = new Date(day.date);
    const options = {
      weekday: "long",
      day: "numeric",
    };
    const formatDate = dayDate.toLocaleDateString(undefined, options);
    const dayElement = `<div class="dayElement dark" data-date="${
      day.date
    }" style="background: ${(0,_backgroundColor_js__WEBPACK_IMPORTED_MODULE_0__.backgroundColor)(day.day.condition.text)}">
            <p class="day">${formatDate}</p>
            <img src="${day.day.condition.icon}" alt="${
      day.day.condition.text
    }" class="dayIcon" width="50" height="50" />
            <p class="dayTemp">${day.day.avgtemp_c}C</p>
            <p class="wind"> ${day.day.maxwind_kph}kph</p>
          </div>`;
    forecastContainer.forEach((container) =>
      container.insertAdjacentHTML("beforeend", dayElement)
    );
  });

  const currentDayElement = document.querySelector(
    `[data-date="${formattedDate}"]`
  );
  currentDayElement.style.border = "2px solid black";
  currentDayElement.scrollIntoView({
    behavior: "smooth",
    inline: "start",
  });
};


/***/ }),

/***/ "./src/displayDetailsCover.js":
/*!************************************!*\
  !*** ./src/displayDetailsCover.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayDetailsCover: () => (/* binding */ displayDetailsCover),
/* harmony export */   displayHours: () => (/* binding */ displayHours)
/* harmony export */ });
/* harmony import */ var _backgroundColor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backgroundColor.js */ "./src/backgroundColor.js");
/* harmony import */ var _renderCover_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCover.js */ "./src/renderCover.js");
/* harmony import */ var _populateBackground_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populateBackground.js */ "./src/populateBackground.js");




const displayDetailsCover = (ev, objects) => {
  (0,_renderCover_js__WEBPACK_IMPORTED_MODULE_1__.renderCover)(isSecondCover);
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
  coverContainer.style.background = `${(0,_backgroundColor_js__WEBPACK_IMPORTED_MODULE_0__.backgroundColor)(
    correctDay.day.condition.text
  )}`;
  displayLocation(correctDay);
  displayWeather(correctDay.day);
  displayDetails(correctDay.day);
  (0,_populateBackground_js__WEBPACK_IMPORTED_MODULE_2__.populateBackground)(correctDay.day.condition.text, isSecondCover, false);
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
  (0,_populateBackground_js__WEBPACK_IMPORTED_MODULE_2__.populateBackground)(correctHour.condition.text, isSecondCover, isNight);
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
  (0,_renderCover_js__WEBPACK_IMPORTED_MODULE_1__.removeCover)(isSecondCover);
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

const displayHours = (ev, objects) => {
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
        )}" data-date="${day.date}" style="background: ${(0,_backgroundColor_js__WEBPACK_IMPORTED_MODULE_0__.backgroundColor)(
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


/***/ }),

/***/ "./src/displayHourly.js":
/*!******************************!*\
  !*** ./src/displayHourly.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayHourly: () => (/* binding */ displayHourly)
/* harmony export */ });
/* harmony import */ var _backgroundColor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backgroundColor.js */ "./src/backgroundColor.js");


const displayHourly = (object) => {
  const forecastContainer = document.querySelectorAll(".forecastContainer");
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const currentDate = new Date();
  const currentHour =
    currentDate.getHours() < 10
      ? `0${currentDate.getHours()}`
      : currentDate.getHours();
  object.forEach((day) => {
    if (formattedDate == day.date) {
      day.hour.forEach((hour) => {
        const isNight =
          hour.time.slice(-5, -3) <= 6 || hour.time.slice(-5, -3) >= 20;
        const hourElement = `<div class="hourElement ${
          isNight ? "light " : "dark"
        }" data-hour="${hour.time.slice(-5)}" data-date="${
          day.date
        }" style="background: ${(0,_backgroundColor_js__WEBPACK_IMPORTED_MODULE_0__.backgroundColor)(
          isNight ? "Clear" : hour.condition.text
        )}">
      <p class="hour">${hour.time.slice(-5)}</p>
      <img src="${hour.condition.icon}" alt="${
          hour.condition.text
        }" class="hourIcon" width="50" height="50" />
      <p class="hourTemp">${hour.temp_c}C</p>
      <p class="wind">${hour.wind_dir}, ${hour.wind_kph}kph</p>
    </div>`;
        forecastContainer.forEach((container) =>
          container.insertAdjacentHTML("beforeend", hourElement)
        );
      });
      const currentHourElement = document.querySelector(
        `[data-hour="${currentHour}:00"]`
      );
      currentHourElement.style.border = "2px solid black";
      currentHourElement.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  });
};


/***/ }),

/***/ "./src/displayWeather.js":
/*!*******************************!*\
  !*** ./src/displayWeather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayWeather: () => (/* binding */ displayWeather)
/* harmony export */ });
/* harmony import */ var _toggleDayOrHour_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleDayOrHour.js */ "./src/toggleDayOrHour.js");
/* harmony import */ var _backgroundColor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backgroundColor.js */ "./src/backgroundColor.js");
/* harmony import */ var _renderMain_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderMain.js */ "./src/renderMain.js");
/* harmony import */ var _populateBackground_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./populateBackground.js */ "./src/populateBackground.js");
/* harmony import */ var _showoff_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showoff.js */ "./src/showoff.js");






const displayWeather = (object) => {
  (0,_renderMain_js__WEBPACK_IMPORTED_MODULE_2__.renderMain)();
  displayLocation(object);
  displayCurrentWeather(object);
  displayDetails(object);
  (0,_toggleDayOrHour_js__WEBPACK_IMPORTED_MODULE_0__.toggleDayOrHour)(object);
  (0,_showoff_js__WEBPACK_IMPORTED_MODULE_4__.showoff)();
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
  background.style.background = `${(0,_backgroundColor_js__WEBPACK_IMPORTED_MODULE_1__.backgroundColor)(
    isNight ? "Clear" : object.current.condition.text
  )}`;
  (0,_populateBackground_js__WEBPACK_IMPORTED_MODULE_3__.populateBackground)(object.current.condition.text, false, isNight);
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


/***/ }),

/***/ "./src/fetchWeather.js":
/*!*****************************!*\
  !*** ./src/fetchWeather.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather)
/* harmony export */ });
/* harmony import */ var _displayWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayWeather.js */ "./src/displayWeather.js");
/* harmony import */ var _currentLocation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentLocation.js */ "./src/currentLocation.js");
/* harmony import */ var _renderMain_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderMain.js */ "./src/renderMain.js");
/* harmony import */ var _weatherKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weatherKey.js */ "./src/weatherKey.js");





const fetchWeather = async (location) => {
  const errorElement = document.querySelector(".errorElement");
  const spinnieContainer = document.querySelector(".spinnieContainer");
  const forecast = "/forecast.json";
  const url = new URL("http://api.weatherapi.com/v1" + forecast);
  const key = _weatherKey_js__WEBPACK_IMPORTED_MODULE_3__.weatherKey;
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
    (0,_displayWeather_js__WEBPACK_IMPORTED_MODULE_0__.displayWeather)(data);
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
      (0,_renderMain_js__WEBPACK_IMPORTED_MODULE_2__.clearMain)();
      fetchWeather(_currentLocation_js__WEBPACK_IMPORTED_MODULE_1__.currentLocation);
    }, 2000);
  }
};


/***/ }),

/***/ "./src/findLocation.js":
/*!*****************************!*\
  !*** ./src/findLocation.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findLocation: () => (/* binding */ findLocation)
/* harmony export */ });
/* harmony import */ var _currentLocation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentLocation.js */ "./src/currentLocation.js");


const findLocation = () => {
  const input = document.querySelector(".searchInput");
  const search = input.value;
  if (search) {
    return search;
  } else {
    return _currentLocation_js__WEBPACK_IMPORTED_MODULE_0__.currentLocation;
  }
};


/***/ }),

/***/ "./src/populateBackground.js":
/*!***********************************!*\
  !*** ./src/populateBackground.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateBackground: () => (/* binding */ populateBackground)
/* harmony export */ });
const populateBackground = (object, isSecondCover, isNight) => {
  const background = document.querySelector(".backgroundContainer");
  const coverBackground = document.querySelector(
    `.background${isSecondCover ? "__b" : "__c"}`
  );
  if (coverBackground) {
    populateCoverBG(object, coverBackground, isNight);
  } else {
    populateMainBG(object, background, isNight);
  }
};

const conditions = {
  Sun: `<div class="sun"></div>`,
  Moon: `<div class="moon"></div>`,
  Sunny: "",
  Clear: "",
  "Partly cloudy": `<div class="cloud"></div>
  <div class="cloud"></div>
  <div class="cloud"></div>`,
  Cloudy: ` <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>`,
  Overcast: ` <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>`,
  "Thundery outbreaks possible": ` <div class="thunderCloud"></div>
  <div class="thunderCloud"></div>
  <div class="thunderCloud"></div>`,
  "Heavy rain": `  <div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  Mist: `  <div class="mist"></div>`,
  "Patchy rain possible": `<div class="cloud"></div>
  <div class="cloud"></div>
  <div class="cloud"></div>`,
  "Patchy snow possible": `<div class="cloud"></div>
<div class="cloud"></div>
<div class="cloud"></div>`,
  "Patchy sleet possible": `<div class="cloud"></div>
<div class="cloud"></div>
<div class="cloud"></div>`,
  "Patchy freezing drizzle possible": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  Fog: `  <div class="mist"></div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>`,
  "Freezing fog": `  <div class="mist"></div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>`,
  "Patchy light drizzle": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Light drizzle": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Freezing drizzle": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Heavy freezing drizzle": `<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Patchy light rain": `<div class="cloud"></div>
<div class="cloud"></div>
<div class="cloud"></div>`,
  "Light rain": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Moderate rain at times": `<div class="cloud"></div>
<div class="cloud"></div>
<div class="cloud"></div>`,
  "Moderate rain": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Heavy rain at times": `<div class="darkCloud"></div>
<div class="darkCloud"></div>
<div class="darkCloud"></div>`,
  "Heavy rain": `<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Light freezing rain": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Moderate or heavy freezing rain": `<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Light sleet": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Moderate or heavy sleet": `<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Patchy light snow": `<div class="cloud"></div>
<div class="cloud"></div>
<div class="cloud"></div>`,
  "Patchy moderate snow": `<div class="cloud"></div>
<div class="cloud"></div>
<div class="cloud"></div>`,
  "Moderate snow": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Patchy heavy snow": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Moderate or heavy sleet showers": `  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>`,
  "Ice pellets": `<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>`,
  "Light rain shower": `<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>`,
  "Moderate or heavy rain shower": `<div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>`,
  "Light snow": `<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>`,
  "Torrential rain shower": `<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Heavy snow": ` <div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>
<div class="bigCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
</div>`,
  "Light sleet showers": `<div class="cloud"></div>
<div class="cloud"></div>
<div class="cloud"></div>`,
  "Moderate or heavy sleet showers": `<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigDarkCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Light snow showers": `<div class="cloud"></div>
<div class="cloud"></div>
<div class="cloud"></div>`,
  "Moderate or heavy snow showers": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Light showers of ice pellets": `<div class="cloud"></div>
<div class="cloud"></div>
<div class="cloud"></div>`,
  "Moderate or heavy showers of ice pellets": `<div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
  <div class="bigDarkCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>`,

  "Patchy light rain with thunder": `<div class="thunderCloud"></div>
<div class="thunderCloud"></div>
<div class="thunderCloud"></div>`,
  "Patchy light snow with thunder": `<div class="thunderCloud"></div>
<div class="thunderCloud"></div>
<div class="thunderCloud"></div>`,
  "Moderate or heavy rain with thunder": `    <div class="thunderWrapper">
  <div class="bigThunderCloud">
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    </div>
</div>
<div class="thunderWrapper">
  <div class="bigThunderCloud">
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    </div>
</div>
<div class="thunderWrapper">
  <div class="bigThunderCloud">
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    </div>
</div>
<div class="thunderWrapper">
  <div class="bigThunderCloud">
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    </div>
</div>
<div class="thunderWrapper">
  <div class="bigThunderCloud">
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    </div>
</div>
<div class="thunderWrapper">
  <div class="bigThunderCloud">
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    </div>
</div>
<div class="thunderWrapper">
  <div class="bigThunderCloud">
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    </div>
</div>
<div class="thunderWrapper">
  <div class="bigThunderCloud">
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    <div class="cloudPart"></div>
    </div>
</div>`,
  "Moderate or heavy snow with thunder": `<div class="thunderWrapper">
<div class="bigThunderCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
</div>
<div class="thunderWrapper">
<div class="bigThunderCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
</div>
<div class="thunderWrapper">
<div class="bigThunderCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
</div>
<div class="thunderWrapper">
<div class="bigThunderCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
</div>
<div class="thunderWrapper">
<div class="bigThunderCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
</div>
<div class="thunderWrapper">
<div class="bigThunderCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
</div>
<div class="thunderWrapper">
<div class="bigThunderCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
</div>
<div class="thunderWrapper">
<div class="bigThunderCloud">
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  <div class="cloudPart"></div>
  </div>
</div>`,
  Blizzard: `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
  "Blowing snow": `<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>
<div class="bigCloud">
<div class="cloudPart"></div>
<div class="cloudPart"></div>
<div class="cloudPart"></div>
</div>`,
};

const populateMainBG = (object, container, isNight) => {
  container.insertAdjacentHTML("beforeend", conditions[object]);
  container.insertAdjacentHTML(
    "beforeend",
    conditions[isNight ? "Moon" : "Sun"]
  );
  addPrecip(object, container);
};

const populateCoverBG = (object, container, isNight) => {
  container.insertAdjacentHTML("beforeend", conditions[object]);
  container.insertAdjacentHTML(
    "beforeend",
    conditions[isNight ? "Moon" : "Sun"]
  );
  addPrecip(object, container);
};

const pellets = (cloud) => {
  const pellets = document.createElement("div");
  pellets.classList.add("pellets");
  const left = Math.floor(Math.random() * (cloud.offsetWidth + 50));

  cloud.appendChild(pellets);
  pellets.style.left = left + "px";

  setTimeout(() => {
    cloud.removeChild(pellets);
  }, 700);
};

const rain = (cloud) => {
  const drop = document.createElement("div");
  drop.classList.add("drop");
  const left = Math.floor(Math.random() * (cloud.offsetWidth + 50));

  cloud.appendChild(drop);
  drop.style.left = left + "px";

  setTimeout(() => {
    cloud.removeChild(drop);
  }, 1000);
};

const snow = (cloud) => {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  const left = Math.floor(Math.random() * (cloud.offsetWidth + 50));

  cloud.appendChild(snowflake);
  snowflake.style.left = left + "px";

  setTimeout(() => {
    cloud.removeChild(snowflake);
  }, 3000);
};

const blizzard = (cloud) => {
  const blizzard = document.createElement("div");
  blizzard.classList.add("blizzard");
  const left = Math.floor(Math.random() * (cloud.offsetWidth + 150));

  cloud.appendChild(blizzard);
  blizzard.style.left = left + "px";

  setTimeout(() => {
    cloud.removeChild(blizzard);
  }, 1000);
};
const blowingSnow = (container) => {
  const blowingSnow = document.createElement("div");
  blowingSnow.classList.add("blowingSnow");
  const left = Math.floor(Math.random() * container.offsetHeight);

  container.appendChild(blowingSnow);
  blowingSnow.style.top = left + "px";

  setTimeout(() => {
    container.removeChild(blowingSnow);
  }, 1500);
};

const addPrecip = (object, container) => {
  const clouds = document.querySelectorAll(`.${container.className} > *`);
  const showerTarget = Math.floor(Math.random() * (clouds.length - 1));
  let frequency = 50;
  if (object.toLowerCase().includes("heavy")) {
    frequency = 10;
  } else if (object.toLowerCase().includes("moderate")) {
    frequency = 30;
  } else if (object.toLowerCase().includes("light")) {
    frequency = 50;
  }
  let filteredClouds = clouds;
  if (object.includes("shower")) {
    filteredClouds = Array.from(clouds).filter(
      (element, index) => index == showerTarget
    );
  }
  if (isRain(object)) {
    addRain(object, filteredClouds, frequency);
  } else if (object === "Blowing snow") {
    addBlowingSnow(container);
  } else if (isSnow(object)) {
    addSnow(object, filteredClouds, frequency);
  } else if (object === "Blizzard") {
    addBlizzard(filteredClouds);
  } else if (isPellets(object)) {
    addPellets(object, filteredClouds, frequency);
  }
};

const isPellets = (object) => {
  const pelletsRegex = /(pellets)/;
  const isPellets = pelletsRegex.test(object);
  return isPellets;
};

const isRain = (object) => {
  const rainRegex = /(rain|drizzle|sleet|shower)(?!(.*(?:snow|pellets)))/;
  const isRain = rainRegex.test(object);
  return isRain;
};

const isSnow = (object) => {
  const snowRegex = /(snow)(?!.*(?:Blowing))/;
  const isSnow = snowRegex.test(object);
  return isSnow;
};

const isPatchy = (object) => {
  const patchyRegex = /(patchy|times)/i;
  const isPatchy = patchyRegex.test(object);
  return isPatchy;
};

const addPellets = (object, filteredClouds, frequency) => {
  filteredClouds.forEach((cloud) => {
    if (!cloud.classList.contains("sun") && !cloud.classList.contains("moon")) {
      if (isPatchy(object)) {
        const patchyPrecip = () => {
          let intervalId = setInterval(() => {
            pellets(cloud);
          }, frequency);
          setTimeout(() => {
            clearInterval(intervalId);
            setTimeout(patchyPrecip, 5000);
          }, 5000);
        };
        patchyPrecip();
      } else {
        setInterval(() => {
          pellets(cloud);
        }, frequency);
      }
    }
  });
};

const addBlowingSnow = (container) => {
  const blowingSnowGenerator = document.createElement("div");
  blowingSnowGenerator.classList.add("blowingSnowGenerator");
  container.appendChild(blowingSnowGenerator);
  setInterval(() => {
    blowingSnow(blowingSnowGenerator);
  }, 10);
};

const addBlizzard = (filteredClouds) => {
  filteredClouds.forEach((cloud) => {
    if (!cloud.classList.contains("sun") && !cloud.classList.contains("moon")) {
      setInterval(() => {
        blizzard(cloud);
      }, 20);
    }
  });
};

const addRain = (object, filteredClouds, frequency) => {
  filteredClouds.forEach((cloud) => {
    if (!cloud.classList.contains("sun") && !cloud.classList.contains("moon")) {
      if (isPatchy(object)) {
        const patchyPrecip = () => {
          let intervalId = setInterval(() => {
            rain(cloud);
          }, frequency);
          setTimeout(() => {
            clearInterval(intervalId);
            setTimeout(patchyPrecip, 5000);
          }, 5000);
        };
        patchyPrecip();
      } else {
        setInterval(() => {
          rain(cloud);
        }, frequency);
      }
    }
  });
};

const addSnow = (object, filteredClouds, frequency) => {
  filteredClouds.forEach((cloud) => {
    if (!cloud.classList.contains("sun") && !cloud.classList.contains("moon")) {
      if (isPatchy(object)) {
        const patchyPrecip = () => {
          let intervalId = setInterval(() => {
            snow(cloud);
          }, frequency);
          setTimeout(() => {
            clearInterval(intervalId);
            setTimeout(patchyPrecip, 5000);
          }, 5000);
        };
        patchyPrecip();
      } else {
        setInterval(() => {
          snow(cloud);
        }, frequency);
      }
    }
  });
};


/***/ }),

/***/ "./src/renderCover.js":
/*!****************************!*\
  !*** ./src/renderCover.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeCover: () => (/* binding */ removeCover),
/* harmony export */   renderCover: () => (/* binding */ renderCover)
/* harmony export */ });
const renderCover = (isSecondCover) => {
  const container = document.querySelector("main");
  const cover = ` <div class="detailsCover${isSecondCover ? "__c" : ""}">
    <div class="collapseCover${isSecondCover ? "__c" : ""}">+</div>
    <div class="coverContainer${isSecondCover ? "__c" : ""}">
      <div class="dataContainer${isSecondCover ? "__c" : ""}">
        <div class="overviewContainer">
          <div class="weatherWrapper">
            <p class="localDate${isSecondCover ? "__b" : "__c"}">date</p>
            <p class="localTime${isSecondCover ? "__b" : "__c"}">time</p>
          </div>
          <div>
          <p class="temperature${isSecondCover ? "__b" : "__c"}">27c</p>
          <p class="weatherType${isSecondCover ? "__b" : "__c"}">sunny</p>
          </div>
          
        </div>
        <div class="weatherDetailsContainer">
          <p class="feelsLike${
            isSecondCover ? "__b" : "__c"
          }"><span class="WDSpan">Feels like:</span></p>
          <p class="humidity${
            isSecondCover ? "__b" : "__c"
          }"><span class="WDSpan">Humidity:</span></p>
          <p class="windSTR${
            isSecondCover ? "__b" : "__c"
          }"><span class="WDSpan">Wind STR:</span></p>
          <p class="windDIR${
            isSecondCover ? "__b" : "__c"
          }"><span class="WDSpan">Wind DIR:</span></p>
          <p class="vis${
            isSecondCover ? "__b" : "__c"
          }"><span class="WDSpan">Visibility:</span></p>
          <p class="precip${
            isSecondCover ? "__b" : "__c"
          }"><span class="WDSpan">Precip:</span></p>
          <p class="UV${
            isSecondCover ? "__b" : "__c"
          }"><span class="WDSpan">UV:</span></p>
          <p class="pressure${
            isSecondCover ? "__b" : "__c"
          }"><span class="WDSpan">Pressure:</span></p>
          <p class="gust${
            isSecondCover ? "__b" : "__c"
          }"><span class="WDSpan">Gust:</span></p>
        </div>
        <div class="forecastContainer__c"></div>
      </div>
      <div class="background${isSecondCover ? "__b" : "__c"}"></div>
    </div>
  </div>`;
  container.insertAdjacentHTML("beforeend", cover);
};

const removeCover = (isSecondCover) => {
  const cover = document.querySelector(
    `.detailsCover${isSecondCover ? "__c" : ""}`
  );
  cover.remove();
};


/***/ }),

/***/ "./src/renderMain.js":
/*!***************************!*\
  !*** ./src/renderMain.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearMain: () => (/* binding */ clearMain),
/* harmony export */   renderMain: () => (/* binding */ renderMain)
/* harmony export */ });
const renderMain = () => {
  const container = document.querySelector("main");
  const main = `<div class="mainContainer">
  <div class="overviewContainer">
    <div class="nameWrapper">
      <p class="locationCity"></p>
      <p class="locationCountry"></p>
      <p class="localDate"></p>
    </div>
    <div class="weatherWrapper">
      <p class="temperature"></p>
      <p class="localTime"></p>
      <p class="weatherType"></p>
    </div>
  </div>
  <div class="weatherDetailsContainer">
    <p class="feelsLike"><span class="WDSpan">Feels like:</span></p>
    <p class="humidity"><span class="WDSpan">Humidity:</span></p>
    <p class="windSTR"><span class="WDSpan">Wind STR:</span></p>
    <p class="windDIR"><span class="WDSpan">Wind DIR:</span></p>
    <p class="vis"><span class="WDSpan">Visibility:</span></p>
    <p class="precip"><span class="WDSpan">Precip:</span></p>
    <p class="UV"><span class="WDSpan">UV:</span></p>
    <p class="pressure"><span class="WDSpan">Pressure:</span></p>
    <p class="gust"><span class="WDSpan">Gust:</span></p>
  </div>

  <div class="btnWrapper">
  <div class="toggleComponent">
    <div class="toggleBtn left"></div>
  </div>
  <button class="showoff" id="showoffBtn">Click Me!</button>
  </div>

  <div class="forecastContainer"></div>
  </div>`;
  container.insertAdjacentHTML("beforeend", main);
};

const clearMain = () => {
  const main = document.querySelector(".mainContainer");
  main.remove();
};


/***/ }),

/***/ "./src/showoff.js":
/*!************************!*\
  !*** ./src/showoff.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showoff: () => (/* binding */ showoff)
/* harmony export */ });
/* harmony import */ var _populateBackground_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populateBackground.js */ "./src/populateBackground.js");
/* harmony import */ var _backgroundColor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backgroundColor.js */ "./src/backgroundColor.js");



const showoff = () => {
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
  (0,_populateBackground_js__WEBPACK_IMPORTED_MODULE_0__.populateBackground)(conditions, false, false);
  background.style.background = `${(0,_backgroundColor_js__WEBPACK_IMPORTED_MODULE_1__.backgroundColor)(conditions)}`;
};

const clearBackground = () => {
  const background = document.querySelector(".backgroundContainer");
  while (background.firstChild) {
    background.removeChild(background.firstChild);
  }
};


/***/ }),

/***/ "./src/toggleDayOrHour.js":
/*!********************************!*\
  !*** ./src/toggleDayOrHour.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleDayOrHour: () => (/* binding */ toggleDayOrHour)
/* harmony export */ });
/* harmony import */ var _displayHourly_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayHourly.js */ "./src/displayHourly.js");
/* harmony import */ var _displayDaily_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayDaily.js */ "./src/displayDaily.js");
/* harmony import */ var _clearForecast_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearForecast.js */ "./src/clearForecast.js");
/* harmony import */ var _displayDetailsCover_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayDetailsCover.js */ "./src/displayDetailsCover.js");





const toggleDayOrHour = (object) => {
  const toggleComponent = document.querySelector(".toggleComponent");
  toggleComponent.addEventListener("click", () => changePosition(object));
  (0,_displayHourly_js__WEBPACK_IMPORTED_MODULE_0__.displayHourly)(object.forecast.forecastday);
  hourListeners(object.forecast.forecastday);
};

const changePosition = (object) => {
  const toggleBtn = document.querySelector(".toggleBtn");
  if (toggleBtn.classList.contains("left")) {
    toggleBtn.classList.remove("left");
    toggleBtn.classList.add("right");
    (0,_clearForecast_js__WEBPACK_IMPORTED_MODULE_2__.clearForecast)();
    (0,_displayDaily_js__WEBPACK_IMPORTED_MODULE_1__.displayDaily)(object.forecast.forecastday);
    dayListeners(object.forecast.forecastday);
  } else {
    toggleBtn.classList.remove("right");
    toggleBtn.classList.add("left");
    (0,_clearForecast_js__WEBPACK_IMPORTED_MODULE_2__.clearForecast)();
    (0,_displayHourly_js__WEBPACK_IMPORTED_MODULE_0__.displayHourly)(object.forecast.forecastday);
    hourListeners(object.forecast.forecastday);
  }
};

const hourListeners = (object) => {
  const hourElements = document.querySelectorAll(".hourElement");
  hourElements.forEach((element) => {
    const clickHandler = (event) => {
      (0,_displayDetailsCover_js__WEBPACK_IMPORTED_MODULE_3__.displayDetailsCover)(event, object);
    };
    element.removeEventListener("click", clickHandler);
    element.addEventListener("click", clickHandler);
  });
};

const dayListeners = (object) => {
  const dayElements = document.querySelectorAll(".dayElement");
  dayElements.forEach((element) => {
    const clickHandler = (event) => {
      (0,_displayDetailsCover_js__WEBPACK_IMPORTED_MODULE_3__.displayDetailsCover)(event, object);
    };
    element.removeEventListener("click", clickHandler);
    element.addEventListener("click", clickHandler);
  });
};


/***/ }),

/***/ "./src/weatherKey.js":
/*!***************************!*\
  !*** ./src/weatherKey.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   weatherKey: () => (/* binding */ weatherKey)
/* harmony export */ });
const weatherKey = "1b3bd345873848a2b92114519233008";


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchWeather.js */ "./src/fetchWeather.js");
/* harmony import */ var _currentLocation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentLocation.js */ "./src/currentLocation.js");
/* harmony import */ var _findLocation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./findLocation.js */ "./src/findLocation.js");
/* harmony import */ var _renderMain_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderMain.js */ "./src/renderMain.js");





const searchButton = document.querySelector(".searchButton");

(0,_fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)(_currentLocation_js__WEBPACK_IMPORTED_MODULE_1__.currentLocation);

searchButton.addEventListener("click", (ev) => {
  (0,_renderMain_js__WEBPACK_IMPORTED_MODULE_3__.clearMain)();
  ev.preventDefault();
  (0,_fetchWeather_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)((0,_findLocation_js__WEBPACK_IMPORTED_MODULE_2__.findLocation)());
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map