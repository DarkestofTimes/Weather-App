export const clearForecast = () => {
  const forecastContainer = document.querySelectorAll(".forecastContainer");
  forecastContainer.forEach((container) => {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  });
};
