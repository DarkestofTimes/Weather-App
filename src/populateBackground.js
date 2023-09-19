export const populateBackground = (object, isSecondCover, isNight) => {
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
