import { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Icon from '../Icon/Icon';
import { getWeatherIcon } from '../../utility/weatherCodeHelper';
import { useLocationStore, useWeatherStore } from '../../store/store';

export default function Hero() {
  const currentWeather = useWeatherStore((state) => state.current);
  const defaultLocation = useLocationStore((state) => state.defaultLocation);
  const [currentWeatherCode, setCurrentWeatherCode] = useState(0);
  const weatherIcon = getWeatherIcon(currentWeatherCode);

  useEffect(() => {
    setCurrentWeatherCode(currentWeather.weatherCode);
  }, [currentWeather]);

  return (
    <View style={styles.container}>
      {Object.keys(currentWeather).length > 0 && (
        <View style={styles.currentWeatherSection}>
          <Text style={styles.currentHeading}>{defaultLocation.name}</Text>
          <Icon name={weatherIcon} height={150} width={150} />
          <Text style={styles.currentData}>
            Temperature: {currentWeather.temperature}
          </Text>
          <Text style={styles.currentData}>
            Humidity: {currentWeather.humidity}
          </Text>
          <Text style={styles.currentData}>
            Windspeed: {currentWeather.windSpeed}
          </Text>
          <Text style={styles.currentData}>UV: {currentWeather.uv}</Text>
          <Text style={styles.currentData}>
            UV - Clear Sky: {currentWeather.uvClearSky}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  currentWeatherSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  currentHeading: {
    color: '#fff',
    fontSize: 20,
  },
  currentData: {
    color: '#fff',
    fontSize: 15,
  },
  textInput: {
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
