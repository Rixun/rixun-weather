import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { GetWeatherForecast } from './src/api/api';

export default function App() {
  const [userInput, setUserInput] = useState('');
  const [weeklyForecast, setWeeklyForecast] = useState([]);

  const HandleSearchButton = () => {
    var result = GetWeatherForecast(userInput);
    setWeeklyForecast(result);

    console.log('--------------------------')
    console.log(result);
    console.log('--------------------------')
    
  }

  return (
    <View style={styles.container}>
      <Text>{userInput}</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.textInput}
        onChangeText={setUserInput}
        value={userInput}
      />
      <Button title='Get Weather' onPress={() => HandleSearchButton()}/>
      {weeklyForecast.map((data) => (
        <Text>{data.date} - {data.tempMax} / {data.tempMin}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 80,
    // justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});