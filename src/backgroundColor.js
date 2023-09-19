export const backgroundColor = (object) => {
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
