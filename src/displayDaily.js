import { backgroundColor } from "./backgroundColor.js";

export const displayDaily = (array) => {
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
    }" style="background: ${backgroundColor(day.day.condition.text)}">
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
