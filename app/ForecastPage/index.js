import { useState, useEffect } from 'react';
import { StyleSheet, View, Button, TextInput, Image, Text } from 'react-native';
import DailyWeatherCards from '../../components/DailyWeatherCards';
import { GetWeatherForecast } from '../../api/api';

export default function ForecastPage() {
  // const [userInput, setUserInput] = useState('');
  const [currentWeather, setCurrentWeather] = useState({})
  const [weeklyForecast, setWeeklyForecast] = useState([]);

  useEffect(() => {
    HandleSearchButton();
  }, []);

  const HandleSearchButton = async () => {
    var result = await GetWeatherForecast(userInput);
    setCurrentWeather(result.current);
    setWeeklyForecast(result.weekly);
  }

  return (
    <View style={styles.container}>
      <View style={styles.currentWeatherSection}>
        <Text style={styles.currentHeading}>Sydney</Text>        
        <Image
          style={styles.currentImg}
          source={require('../../assets/sun-icon.png')}
        />
        <Text style={styles.currentData}>Temp: {currentWeather.temperature}</Text>
        <Text style={styles.currentData}>Windspeed: {currentWeather.windSpeed}</Text>
      </View>
      {/* <TextInput
        style={styles.textInput}
        onChangeText={setUserInput}
        value={userInput}
      />
      <Button title='Get Weather Forecast' onPress={() => HandleSearchButton()}/> */}
      <View style={styles.cardSection}>
        {weeklyForecast.map((data) => (
          <DailyWeatherCards
            key={data.date}
            day={data.date}
            dailyMaxTemp={data.tempMax}
            dailyMinTemp={data.tempMin}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentWeatherSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  currentHeading: {
    fontSize: 20
  },
  currentImg: {
    width: 120,
    height: 120,
    marginTop: 10,
    marginBottom: 10
  },
  currentData: {
    fontSize: 15
  },
  textInput: {
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  cardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 10
  }
});