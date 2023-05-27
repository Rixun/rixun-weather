import { StyleSheet, Text, View, Image } from 'react-native';

const GetStringDay = (currentDate) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  return days[currentDate];
}

export default function HorizontalCardItem({ day, dailyMaxTemp, dailyMinTemp }) {
  let currentDate = new Date(day);
  let formattedDay = GetStringDay(currentDate.getDay());

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.formattedDay}>{formattedDay}</Text>
      <Image
        style={styles.img}
        source={require('../../../assets/sun-icon.png')}
      />
      <Text style={styles.temperatureReading}>{dailyMaxTemp} / {dailyMinTemp}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#e2e2e2',
    height: 80,
    minWidth: 40,
    borderWidth: 0.5,
    margin: 1,
    padding: 1.5
  },
  formattedDay: {
    color: '#fff',
  },
  img: {
    width: 35,
    height: 35,
  },
  temperatureReading: {
    color: '#fff',
    fontSize: 11
  }
})