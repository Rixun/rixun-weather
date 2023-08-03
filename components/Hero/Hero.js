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
        <>
          <View style={styles.headingContainer}>
            <Text style={styles.currentHeading}>{defaultLocation.name}</Text>
          </View>
          <View style={styles.subContainer}>
            <View style={styles.main}>
              <Icon name={weatherIcon} size={150} />
              <Text style={[styles.currentData, styles.temperature]}>
                {Math.round(currentWeather.temperature)}°
              </Text>
            </View>
            <View style={styles.info}>
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
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 768,
  },
  headingContainer: {
    alignItems: 'center',
  },
  currentHeading: {
    color: '#fff',
    fontSize: 20,
  },
  subContainer: {
    width: '100%',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 25,
  },
  temperature: {
    fontSize: 75,
  },
  info: {
    paddingLeft: 25,
  },
  currentData: {
    color: '#fff',
    fontSize: 14,
  },
});
