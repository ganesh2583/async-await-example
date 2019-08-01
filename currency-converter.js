const fetch = require("node-fetch");
const axios = require("axios")

export const accessKey = "bbff0a36eba1eaa4db774a1e4b1b8fdd";

export const currenyConverterUrl = `http://apilayer.net/api/live?access_key=${accessKey}`

export const countryCurrentFinderUrl = `https://restcountries.eu/rest/v2/currency/`;

//&currencies=EUR,GBP,CAD,PLN&source=USD&format=1`;

export const getExchangeRate = async (fromCurrency, toCurrency) => {
    const response = await axios.get(`${currenyConverterUrl}&currencies=${toCurrency}&source=${fromCurrency}`)
    const conversionRate = response.data.quotes[fromCurrency+toCurrency]
    return conversionRate;
}


export const getCountries = async (countryCode) => {
    const response = await axios.get(`${countryCurrentFinderUrl}${countryCode}`)
    return response.data.map(country => country.name);
}