const convertToCelsius = function(temp) {
  let converted = ((temp-32) * (5/9));
  if(Number.isInteger(converted)){
    converted = Math.floor(converted);
  }else{
    converted = Number(converted.toFixed(1));
  }
  return converted;
};

const convertToFahrenheit = function(temp) {
  let converted =(temp * 9/5 + 32);
  if(Number.isInteger(converted)){
    converted = Math.floor(converted);
  }else{
    converted = Number(converted.toFixed(1));
  }
  return converted;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
