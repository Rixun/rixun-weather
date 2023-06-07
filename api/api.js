import jsonData from './suburbs.json';
let SEARCH_BY = 'suburb'; // make configurable later

const WeeklyForecast = async (long, lat) => {
  let returnResult = {};
  let currentForecast = {};
  let weeklyForecast = [];
  //let res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&timezone=Australia%2FSydney&current_weather=true&daily=weathercode&daily=temperature_2m_max,temperature_2m_min`);

  // Hardcoded suburb for testing
  let res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=-33.87&longitude=151.21&timezone=Australia%2FSydney&current_weather=true&daily=weathercode&daily=temperature_2m_max,temperature_2m_min`
  );
  let resData = await res.json();

  // Current forecast
  currentForecast.temperature = resData['current_weather'].temperature;
  currentForecast.windSpeed = resData['current_weather'].windspeed;
  currentForecast.weatherCode = resData['current_weather'].weathercode;

  // The next 7 days forecast
  for (let i = 0; i < resData['daily']['time'].length; i++) {
    let dailyResult = {};
    dailyResult.date = resData['daily']['time'][i];
    dailyResult.weatherCode = resData['daily']['weathercode'][i];
    dailyResult.tempMax = resData['daily']['temperature_2m_max'][i];
    dailyResult.tempMin = resData['daily']['temperature_2m_min'][i];
    weeklyForecast.push(dailyResult);
  }

  returnResult.current = currentForecast;
  returnResult.weekly = weeklyForecast;

  return returnResult;
};

export async function GetWeatherForecast(searchInput) {
  let searchForLatitude = '';
  let searchForLongitude = '';

  for (let i = 0; i < jsonData.data.length; i++) {
    if (jsonData.data[i][SEARCH_BY] == searchInput) {
      //searchResults = jsonData.data[i];
      searchForLatitude = jsonData.data[i].lat;
      searchForLongitude = jsonData.data[i].long;
      break;
    }
  }

  return await WeeklyForecast(searchForLongitude, searchForLatitude);
}

export const getSuburbs = async (input) => {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=10&language=en&format=json`
  );

  const searchData = await response.json();

  if (searchData.results) {
    return searchData.results;
  } else {
    //error
  }
};
