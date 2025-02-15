const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

// 1) Write a `filterHighTemperatures` function that returns a new array containing temperatures greater than or equal to 25 degrees Celsius.
let filterHighTemperatures = temperatures.filter(function (temps) {
  return temps >= 25;
});
console.log(filterHighTemperatures);
// Your code here

// Write a `filterLowTemperatures` function that returns a new array containing temperatures less than 20 degrees Celsius.
let filterLowTemperatures = temperatures.filter(function (temps) {
  return temps < 20;
});
console.log(filterLowTemperatures);
// Your code here

// Write a `convertCelsiusToFahrenheit` function that converts the entire list of temperatures to Fahrenheit, and return it. Use the formula (Celsius * 9/5) + 32.
let convertCelsiusToFahrenheit = temperatures.map(function (temps) {
  return (temps * 9) / 5 + 32;
});
console.log(convertCelsiusToFahrenheit);
// Your code here

// Write a `labelTemperatures` function that returns a new array that labels each temperature as either:
// "Warm" for temperatures >=25,
// "Mild" for temperatures between 20 and 24,
// "Cool" for temperatures <20
let labelTemperatures = temperatures.map(function (temps) {
  if (temps >= 25) {
    return "Warm";
  } else if (temps >= 20 && temps <= 24) {
    return "Mild";
  } else if (temps < 20) {
    return "Cool";
  }
});
console.log(labelTemperatures);
// Your code here

// Write a `getMaxTemperature` function that calculates and return the highest temperature of the month.
let getMaxTemperature = temperatures.reduce(function (
  currentTemp,
  previousTemp
) {
  if (currentTemp > previousTemp) {
    return currentTemp;
  } else {
    return previousTemp;
  }
});
console.log(getMaxTemperature);
// Your code here

// Write a `getMinTemperature` function that calculates and return the lowest temperature of the month.
let getMinTemperature = temperatures.reduce(function (
  currentTemp,
  previousTemp
) {
  if (currentTemp < previousTemp) {
    return currentTemp;
  } else {
    return previousTemp;
  }
});
console.log(getMinTemperature);
// Your code here

module.exports = {
  filterHighTemperatures,
  filterLowTemperatures,
  convertCelsiusToFahrenheit,
  labelTemperatures,
  getMaxTemperature,
  getMinTemperature,
};
