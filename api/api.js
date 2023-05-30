import jsonData from './suburbs.json';
let SEARCH_BY = 'suburb'; // make configurable later

const WeeklyForecast = async (long, lat) => {
  let returnResult = {};
  let currentForecast = {};
  let dailyHourlyForecast = [];
  let weeklyForecast = [];
  
  //let res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&timezone=Australia%2FSydney&current_weather=true&daily=weathercode&daily=temperature_2m_max,temperature_2m_min,uv_index_max,uv_index_clear_sky_max&hourly=temperature_2m,relativehumidity_2m`);

  // Hardcoded suburb for testing
  let res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=-33.87&longitude=151.21&timezone=Australia%2FSydney&current_weather=true&daily=weathercode&daily=temperature_2m_max,temperature_2m_min,uv_index_max,uv_index_clear_sky_max&hourly=temperature_2m,relativehumidity_2m`);
  let resData = await res.json();

  // Current forecast
  currentForecast.temperature = resData['current_weather'].temperature;
  currentForecast.windSpeed = resData['current_weather'].windspeed;
  currentForecast.weatherCode = resData['current_weather'].weathercode;

  // Daily hourly forecast
  for (let i = 0; i < resData['hourly']['time'].length; i++) {
    if (i === 24) { break; }

    // To get the current humidity
    if (i === 0) { currentForecast.humidity = resData['hourly']['relativehumidity_2m'][i]; }

    let hourlyResult = {};
    hourlyResult.temperature = resData['hourly']['temperature_2m'][i];
    hourlyResult.humidity = resData['hourly']['relativehumidity_2m'][i];
    dailyHourlyForecast.push(hourlyResult);
  }

  // The next 7 days forecast
  for (let i = 0; i < resData['daily']['time'].length; i++) {
    let dailyResult = {};
    dailyResult.date = resData['daily']['time'][i];
    dailyResult.weatherCode = resData['daily']['weathercode'][i];
    dailyResult.tempMax = resData['daily']['temperature_2m_max'][i];
    dailyResult.tempMin = resData['daily']['temperature_2m_min'][i];
    dailyResult.uv = resData['daily']['uv_index_max'][i];
    dailyResult.uvClearSky = resData['daily']['uv_index_clear_sky_max'][i];

    // To get the current UV ratings
    if (i === 0) {
      currentForecast.uv = resData['daily']['uv_index_max'][i];
      currentForecast.uvClearSky = resData['daily']['uv_index_clear_sky_max'][i];
    }
    
    weeklyForecast.push(dailyResult);
  }

  returnResult.current = currentForecast;
  returnResult.dailyHourly = dailyHourlyForecast;
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
