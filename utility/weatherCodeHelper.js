export const getWeatherIcon = (weatherCode) => {
  const WeatherCodeEnum = {
    0: 'Sun', // Clear Sky
    1: 'Sun', // Mainly clear
    2: 'SunCloud', // Partly cloudy
    3: 'SunCloud', // Overcast
    45: 'Fog', // Fog
    48: 'Fog', // Depositing rime fog
    51: 'CloudLightRain', // Drizzle: Light
    53: 'CloudRain', // Drizzle: Moderate
    55: 'CloudRain', // Drizzle: Dense
    56: 'CloudLightRain', // Freezing Drizzle: Light
    57: 'CloudRain', // Freezing Drizzle: Dense
    61: 'CloudLightRain', // Rain: Slight
    63: 'CloudRain', // Rain: Moderate
    65: 'CloudRain', // Rain: Heavy
    66: 'CloudRain', // Freezing Rain: Light
    67: 'CloudRain', // Freezing Rain: Heavy
    71: 'CloudSnow', // Snow fall: Slight
    73: 'CloudSnow', // Snow fall: Moderate
    75: 'CloudSnow', // Snow fall: Heavy
    77: 'SunCloudSnow', // Snow Grains
    80: 'CloudLightRain', // Rain showers: Slight
    81: 'CloudRain', // Rain showers: Moderate
    82: 'CloudRain', // Rain showers: Heavy
    85: 'SunCloudSnow', // Snow showers: Slight
    86: 'SunCloudSnow', // Snow showers: Heavy
    95: 'CloudRainThunder', // Thunderstorm: Slight or Moderate
    96: 'CloudRainThunder', // Thunderstorm w/Hail: Slight
    99: 'CloudRainThunder', // Thunderstorm w/Hail: Heavy
  };
  return WeatherCodeEnum[weatherCode];
};
