# Developer Documentation

## Functions

<dl>
<dt><a href="#getAllCities">getAllCities()</a> ⇒ <code>cityList</code></dt>
<dd><p>Get all cities</p>
</dd>
<dt><a href="#getCitiesOfState">getCitiesOfState(countryCode, stateCode)</a> ⇒ <code>cityList</code></dt>
<dd><p>Get a list of cities belonging to a specific state and country</p>
</dd>
<dt><a href="#getCitiesOfCountry">getCitiesOfCountry(countryCode)</a> ⇒ <code>cityList</code></dt>
<dd><p>Get a list of cities belonging to a specific country</p>
</dd>
<dt><a href="#getAllCountries">getAllCountries()</a> ⇒ <code>countryList</code></dt>
<dd><p>Get all countries</p>
</dd>
<dt><a href="#getCountryByISOCode">getCountryByISOCode(isoCode)</a> ⇒ <code>countryList</code></dt>
<dd><p>Get a country by isoCode</p>
</dd>
<dt><a href="#getAllStates">getAllStates()</a> ⇒ <code>stateList</code></dt>
<dd><p>Get all states</p>
</dd>
<dt><a href="#getStatesOfCountry">getStatesOfCountry(countryCode)</a> ⇒ <code>countryList</code></dt>
<dd><p>Get a list of states belonging to a specific country</p>
</dd>
<dt><a href="#getStateByCodeAndCountry">getStateByCodeAndCountry(stateCode, countryCode)</a> ⇒ <code>countryList</code></dt>
<dd><p>Find a state by it&#39;s ISO code and the country in which it is contained</p>
</dd>
</dl>

<a name="getAllCities"></a>

## getAllCities() ⇒ <code>cityList</code>
Get all cities

**Kind**: global function
<a name="getCitiesOfState"></a>

## getCitiesOfState(countryCode, stateCode) ⇒ <code>cityList</code>
Get a list of cities belonging to a specific state and country

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| countryCode | <code>string</code> | Country code |
| stateCode | <code>string</code> | State code |

<a name="getCitiesOfCountry"></a>

## getCitiesOfCountry(countryCode) ⇒ <code>cityList</code>
Get a list of cities belonging to a specific country

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| countryCode | <code>string</code> | Country code |

<a name="getAllCountries"></a>

## getAllCountries() ⇒ <code>countryList</code>
Get all countries

**Kind**: global function
<a name="getCountryByISOCode"></a>

## getCountryByISOCode(isoCode) ⇒ <code>countryList</code>
Get a country by isoCode

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| isoCode | <code>string</code> | ISO code |

<a name="getAllStates"></a>

## getAllStates() ⇒ <code>stateList</code>
Get all states

**Kind**: global function
<a name="getStatesOfCountry"></a>

## getStatesOfCountry(countryCode) ⇒ <code>countryList</code>
Get a list of states belonging to a specific country

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| countryCode | <code>string</code> | Country code |

<a name="getStateByCodeAndCountry"></a>

## getStateByCodeAndCountry(stateCode, countryCode) ⇒ <code>countryList</code>
Find a state by it's ISO code and the country in which it is contained

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| stateCode | <code>string</code> | State code |
| countryCode | <code>string</code> | Country code |

\
This project is inspired by https://github.com/harpreetkhalsagtbit/country-state-city and have been updated with required improvements.\
Data Source:
https://github.com/dr5hn/countries-states-cities-database
For any data related issue, you can raise an issue here.