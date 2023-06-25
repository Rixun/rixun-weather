import jsonData from './suburbs.json';
let SEARCH_BY = 'suburb'; // make configurable later

const getCurrentRoundedDownHourIndex = () => {
  const currentHour = new Date();
  currentHour.setMinutes(0, 0, 0);
  return currentHour.getHours();
};

const mapCurrentForecast = (currentWeather, hourlyWeather, dailyWeather) => {
  const currentForecast = {};
  currentForecast.temperature = currentWeather.temperature;
  currentForecast.windSpeed = currentWeather.windspeed;
  currentForecast.weatherCode = currentWeather.weathercode;
  const hourlyIndex = getCurrentRoundedDownHourIndex();
  currentForecast.humidity = hourlyWeather['relativehumidity_2m'][hourlyIndex];
  currentForecast.uv = dailyWeather['uv_index_max'][0];
  currentForecast.uvClearSky = dailyWeather['uv_index_clear_sky_max'][0];
  return currentForecast;
};
const mapHourlyForecast = (hourlyWeather) => {
  const hourlyForecast = [];
  // Future task: Get 24 hr hourly data from current hour, instead of just 0-24
  for (let i = 0; i <= 24; i++) {
    hourlyForecast.push({
      temperature: hourlyWeather['temperature_2m'][i],
      humidity: hourlyWeather['relativehumidity_2m'][i],
      precipitation_probability: hourlyWeather['precipitation_probability'][i],
    });
  }
  return hourlyForecast;
};
const mapDailyForecast = (dailyWeather) => {
  const dailyForecast = [];
  // Future task: Get 24 hr hourly data from current hour, instead of just 0-24
  for (let i = 0; i < dailyWeather['time'].length; i++) {
    dailyForecast.push({
      date: dailyWeather['time'][i],
      weatherCode: dailyWeather['weathercode'][i],
      tempMax: dailyWeather['temperature_2m_max'][i],
      tempMin: dailyWeather['temperature_2m_min'][i],
      uv: dailyWeather['uv_index_max'][i],
      uvClearSky: dailyWeather['uv_index_clear_sky_max'][i],
    });
  }
  return dailyForecast;
};

export async function getWeatherForecast(locationData) {
  let currentForecast = {};
  let hourlyForecast = [];
  let dailyForecast = [];

  let response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${locationData.latitude}&longitude=${locationData.longitude}&timezone=Australia%2FSydney&current_weather=true&daily=weathercode&daily=temperature_2m_max,temperature_2m_min,uv_index_max,uv_index_clear_sky_max&hourly=temperature_2m,relativehumidity_2m,precipitation_probability`
  );

  let resData = await response.json();

  if (response.status === 200) {
    currentForecast = mapCurrentForecast(
      resData['current_weather'],
      resData['hourly'],
      resData['daily']
    );
    hourlyForecast = mapHourlyForecast(resData['hourly']);
    dailyForecast = mapDailyForecast(resData['daily']);
    return {
      current: currentForecast,
      hourly: hourlyForecast,
      daily: dailyForecast,
    };
  } else {
    // error
    return {
      error: true,
    };
  }
}

export const getSuburbs = async (input) => {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=10&language=en&format=json`
  );

  const searchData = await response.json();

  if (searchData.results) {
    return searchData.results;
  } else {
    // error
    return {
      error: true,
    };
  }
};
