export const renderCover = (isSecondCover) => {
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

export const removeCover = (isSecondCover) => {
  const cover = document.querySelector(
    `.detailsCover${isSecondCover ? "__c" : ""}`
  );
  cover.remove();
};
