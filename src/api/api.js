import jsonData from './suburbs.json';
let searchBy = "suburb"; // make configurable later
let weeklyForecast = [];

const CurrentForecast = async (long, lat) => {
  var res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)
  var resData = await res.json();
  return resData['current_weather'].temperature;
}

const WeeklyForecast = async (long, lat) => {
  //var res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min&timezone=Australia%2FSydney`);
  // Hardcoded suburb for testing
  let res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=-33.88&longitude=151.21&&daily=temperature_2m_max,temperature_2m_min&timezone=Australia%2FSydney`);
  let resData = await res.json();
  
  for (let i = 0; i < resData['daily']['time'].length; i++) {
    let dailyResult = {};
    dailyResult.date = resData['daily']['time'][i];
    dailyResult.tempMax = resData['daily']['temperature_2m_max'][i];
    dailyResult.tempMin = resData['daily']['temperature_2m_min'][i];
    weeklyForecast.push(dailyResult);
  }

  return weeklyForecast;
}
  
export async function GetWeatherForecast(searchInput) {
  let searchForLatitude = '';
  let searchForLongitude = '';

  for (let i = 0; i < jsonData.data.length; i++) {
    if (jsonData.data[i][searchBy] == searchInput) {
      //searchResults = jsonData.data[i];
      searchForLatitude = jsonData.data[i].lat;
      searchForLongitude = jsonData.data[i].long;
      break;
    }
  }

  // return await CurrentWeatherForecast(searchForLongitude, searchForLatitude);
  return await WeeklyForecast(searchForLongitude, searchForLatitude);
}