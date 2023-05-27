import { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { GetWeatherForecast } from '../../api/api';

export default function Hero() {
  // const [userInput, setUserInput] = useState('');
  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    HandleSearchButton();
  }, []);

  const HandleSearchButton = async () => {
    var result = await GetWeatherForecast('');
    setCurrentWeather(result.current);
  };

  return (
    <View style={styles.container}>
      <View style={styles.currentWeatherSection}>
        <Text style={styles.currentHeading}>Sydney</Text>
        <Image
          style={styles.currentImg}
          source={require('../../assets/sun-icon.png')}
        />
        <Text style={styles.currentData}>
          Temp: {currentWeather.temperature}
        </Text>
        <Text style={styles.currentData}>
          Windspeed: {currentWeather.windSpeed}
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
  currentImg: {
    width: 120,
    height: 120,
    marginTop: 10,
    marginBottom: 10,
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
