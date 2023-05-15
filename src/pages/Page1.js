import { StyleSheet, Text, View, Image } from "react-native";

export default function Page1({ day, dailyMaxTemp, dailyMinTemp }) {
  return (
    <View style={styles.cardContainer}>
      <Text>{day}</Text>
      <Image
        style={styles.img}
        source={require('../../assets/sun-icon.png')}
      />
      <Text style={styles.temperatureReading}>{dailyMaxTemp}/{dailyMinTemp}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
    padding: 10,
    height: 80,
    width: 52,
    borderWidth: 1,
    margin: 2
    // borderRadius ,
  },
  img: {
    width: 40,
    height: 40,
  },
  temperatureReading: {
    fontSize: 12,
  }
})