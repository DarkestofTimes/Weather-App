import { backgroundColor } from "./backgroundColor.js";

export const displayHourly = (object) => {
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
        }" style="background: ${backgroundColor(
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
