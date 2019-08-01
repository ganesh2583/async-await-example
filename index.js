const converter = require('./currency-converter');

const currenyConvertCountryInfo = async (fromCurrency, toCurrency, amount) => {
    try {
const conversionRate = await converter.getExchangeRate(fromCurrency, toCurrency);
let finalAmount = amount * conversionRate;
const countries = await converter.getCountries(toCurrency)
return `${amount} ${fromCurrency} is worth ${finalAmount} ${toCurrency}. You can spend these in the following countries: ${countries}`;
    }
    catch (error) {
        throw new Error(`Unable to get currency ${fromCurrency} and  ${toCurrency} ${error}`);
      }
}

currenyConvertCountryInfo('USD', 'INR', 20)
  .then((message) => {
    console.log(message);
  }).catch((error) => {
    console.log(error.message);
  });