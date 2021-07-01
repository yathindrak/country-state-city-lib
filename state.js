const stateList = require("./assets/state.json");
const { compareByName } = require("./utils");

/**
 * Get all states
 * @returns {stateList}
 */
function getAllStates() {
  return new Promise((resolve, reject) => {
    resolve(stateList);
  });
}

/**
 * Get a list of states belonging to a specific country
 * @param {string} countryCode - Country code
 * @returns {countryList}
 */
function getStatesOfCountry(countryCode) {
  return new Promise((resolve, reject) => {
    if (!countryCode) reject("Invalid Country Code");

    const states = stateList.filter((value) => {
      return value.country_code === countryCode;
    });
    resolve(states.sort(compareByName));
  });
}

/**
 * Find a state by it's ISO code and the country in which it is contained
 * @param {string} stateCode - State code
 * @param {string} countryCode - Country code
 * @returns {countryList}
 */
function getStateByCodeAndCountry(stateCode, countryCode) {
  return new Promise((resolve, reject) => {
    if (!stateCode) reject("Invalid State Code");
    if (!countryCode) reject("Invalid Country Code");

    let countryIdx = -1;

    countryIdx = stateList.findIndex((state) => {
      return state.state_code === code && state.country_code === countryCode;
    });
    resolve(countryIdx !== -1 ? stateList[countryIdx] : "");
  });
}

module.exports = {
  getAllStates,
  getStatesOfCountry,
  getStateByCodeAndCountry,
};
