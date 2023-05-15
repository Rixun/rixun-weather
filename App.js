import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import DailyWeatherCards from './src/pages/DailyWeatherCards';
import { GetWeatherForecast } from './src/api/api';

export default function App() {
  const [userInput, setUserInput] = useState('');
  const [weeklyForecast, setWeeklyForecast] = useState([]);

  useEffect(() => {
    HandleSearchButton();
  }, []);

  const HandleSearchButton = async () => {
    var result = await GetWeatherForecast(userInput);
    setWeeklyForecast(result);
  }

  return (
    <View style={styles.container}>
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
      {/* <TextInput
        style={styles.textInput}
        onChangeText={setUserInput}
        value={userInput}
      /> */}
      {/* <Button title='Get Weather' onPress={() => HandleSearchButton()}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 80,
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