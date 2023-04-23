import jsonData from './suburbs.json';
var resTemp = '';
var weeklyForecast = [];
var searchBy = "suburb"; // make configurable later

const APICall = async (long, lat) => {
  var res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)
  var resData = await res.json();
  resTemp = resData['current_weather'].temperature;
}

const APICallDaily = async (long, lat) => {
  //var res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min&timezone=Australia%2FSydney`);
  var res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=-33.87&longitude=151.21&&daily=temperature_2m_max,temperature_2m_min&timezone=Australia%2FSydney`);
  var resData = await res.json();
  var tempArr = [];

  for (var i = 0; i < resData['daily']['time'].length; i++) {
    var dailyResult = {};
    dailyResult.date = resData['daily']['time'][i];
    dailyResult.tempMax = resData['daily']['temperature_2m_max'][i];
    dailyResult.tempMin = resData['daily']['temperature_2m_min'][i];
    tempArr.push(dailyResult);
  }

  weeklyForecast.push(tempArr);
}
  
export function GetWeatherForecast(searchInput) {
  var searchForLatitude = '';
  var searchForLongitude = '';

  for (var i = 0; i < jsonData.data.length; i++) {
    if (jsonData.data[i][searchBy] == searchInput) {
      //searchResults = jsonData.data[i];
      searchForLatitude = jsonData.data[i].lat;
      searchForLongitude = jsonData.data[i].long;
    }
  }
  
  //APICall(searchForLongitude, searchForLatitude);
  APICallDaily(searchForLongitude, searchForLatitude);

  return weeklyForecast;
}