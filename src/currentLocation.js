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

export const currentLocation = getLocation();
