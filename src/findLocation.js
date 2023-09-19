import { currentLocation } from "./currentLocation.js";

export const findLocation = () => {
  const input = document.querySelector(".searchInput");
  const search = input.value;
  if (search) {
    return search;
  } else {
    return currentLocation;
  }
};
