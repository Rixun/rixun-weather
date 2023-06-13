import { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Icon from '../Icon/Icon';
import { GetWeatherForecast } from '../../api/api';
import { getWeatherIcon } from '../../utility/weatherCodeHelper';

export default function Hero() {
  // const [userInput, setUserInput] = useState('');
  const [currentWeather, setCurrentWeather] = useState({});
  const [currentWeatherCode, setCurrentWeatherCode] = useState(0);
  const weatherIcon = getWeatherIcon(currentWeatherCode);

  useEffect(() => {
    HandleSearchButton();
  }, []);

  const HandleSearchButton = async () => {
    var result = await GetWeatherForecast('');
    setCurrentWeather(result.current);
    setCurrentWeatherCode(result.current.weatherCode);
  };

  return (
    <View style={styles.container}>
      <View style={styles.currentWeatherSection}>
        <Text style={styles.currentHeading}>Sydney</Text>
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
        <Text style={styles.currentData}>
          UV: {currentWeather.uv}
        </Text>
        <Text style={styles.currentData}>
          UV - Clear Sky: {currentWeather.uvClearSky}
        </Text>
      </View>
      {/* <TextInput
        style={styles.textInput}
        onChangeText={setUserInput}
        value={userInput}
      />
      <Button title='Get Weather Forecast' onPress={() => HandleSearchButton()}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20
  },
  currentWeatherSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  currentHeading: {
    color: '#fff',
    fontSize: 20
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
  }
});
