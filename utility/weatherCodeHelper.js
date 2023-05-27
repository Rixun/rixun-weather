export const getWeatherIcon = (weatherCode) => {
  const weatherCodeMap = {
    0: 'Sun', // Clear Sky
    1: 'Sun', // Mainly clear
    2: 'SunCloud', // partly cloudy
    3: 'SunCloud', // overcast
    80: 'CloudLightRain', // Slight rain shower
    81: 'CloudRain', // Moderate rain shower
    82: 'CloudRain', // Heavy rain shower
  };
  return weatherCodeMap[weatherCode];
};
