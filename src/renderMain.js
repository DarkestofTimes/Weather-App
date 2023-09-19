export const renderMain = () => {
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

export const clearMain = () => {
  const main = document.querySelector(".mainContainer");
  main.remove();
};
