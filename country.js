const countryList = require("./assets/country.json");

/**
 * Get all countries
 * @returns {countryList}
 */
function getAllCountries() {
  return new Promise((resolve, reject) => {
    resolve(countryList);
  });
}

/**
 * Get a country by isoCode
 * @param {string} isoCode - ISO code
 * @returns {countryList}
 */
function getCountryByISOCode(isoCode) {
  return new Promise((resolve, reject) => {
    if (!isoCode) reject("Invalid ISO-Code");

    let countryIdx = -1;

    if (isoCode.length === 3) {
      countryIdx = countryList.findIndex((item) => {
        return item.iso3 === isoCode;
      });
    } else if (isoCode.length === 2) {
      countryIdx = countryList.findIndex((item) => {
        return item.iso2 === isoCode;
      });
    }

    resolve(countryIdx !== -1 ? countryList[countryIdx] : "");
  });
}

module.exports = {
  getAllCountries,
  getCountryByISOCode,
};
