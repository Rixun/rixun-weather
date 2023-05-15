import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Page1 from './src/pages/Page1';
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
      <Text>{userInput}</Text>
      <StatusBar style="auto" />
      <View style={styles.cardSection}>
        {/* <Page1 />
        <Page1 />
        <Page1 />
        <Page1 />
        <Page1 />
        <Page1 />
        <Page1 /> */}
      </View>
      <View style={styles.cardSection}>
        {weeklyForecast.map((data) => (
          <Page1 day={data.date} dailyMaxTemp={data.tempMax} dailyMinTemp={data.tempMin}/>
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
