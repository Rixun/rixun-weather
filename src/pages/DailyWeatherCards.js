import { StyleSheet, Text, View, Image } from 'react-native';

const GetStringDay = (currentDate) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  return days[currentDate];
}

export default function DailyWeatherCards({ day, dailyMaxTemp, dailyMinTemp }) {
  let currentDate = new Date(day);
  let formattedDay = GetStringDay(currentDate.getDay());

  return (
    <View style={styles.cardContainer}>
      <Text>{formattedDay}</Text>
      <Image
        style={styles.img}
        source={require('../../assets/sun-icon.png')}
      />
      <Text style={styles.temperatureReading}>{dailyMaxTemp} / {dailyMinTemp}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
    // padding: 10,
    height: 80,
    width: 52,
    borderWidth: 0.5,
    margin: 2
  },
  img: {
    width: 40,
    height: 40,
  },
  temperatureReading: {
    fontSize: 12,
  }
})