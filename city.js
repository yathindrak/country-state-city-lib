const cityList = require("./assets/city.json");
const { compareByName } = require("./utils");

/**
 * Get all cities
 * @returns {cityList}
 */
function getAllCities() {
  return new Promise((resolve, reject) => {
    resolve(cityList);
  });
}

/**
 * Get a list of cities belonging to a specific state and country
 * @param {string} countryCode - Country code
 * @param {string} stateCode - State code
 * @returns {cityList}
 */
function getCitiesOfState(countryCode, stateCode) {
  return new Promise((resolve, reject) => {
    if (!stateCode) reject("Invalid State Code");
    if (!countryCode) reject("Invalid Country Code");

    const cities = cityList.filter((value) => {
      return value.country_code === countryCode && value.state_code === stateCode;
    });
    resolve(cities.sort(compareByName));
  });
}

/**
 * Get a list of cities belonging to a specific country
 * @param {string} countryCode - Country code
 * @returns {cityList}
 */
function getCitiesOfCountry(countryCode) {
  return new Promise((resolve, reject) => {
    if (!countryCode) reject("Invalid Country Code");

    const cities = cityList.filter((value) => {
      return value.country_code === countryCode;
    });
    resolve(cities.sort(compareByName));
  });
}

module.exports = {
  getAllCities,
  getCitiesOfState,
  getCitiesOfCountry,
};
