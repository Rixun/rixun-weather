import { StyleSheet, Text, View } from 'react-native';
import Icon from '../../Icon/Icon';
import { getWeatherIcon } from '../../../utility/weatherCodeHelper';

export default function HorizontalCardItem({
  timeText,
  temperatureText,
  rainChanceText,
  weatherCode,
}) {
  const weatherIcon = getWeatherIcon(weatherCode);

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.text}>{timeText}</Text>
        <Icon name={weatherIcon} size={30} />
        <Text style={styles.smallText}>{temperatureText}</Text>
        <View style={styles.rowContainer}>
          <Icon name="Raindrop" size={11} rainChanceText={rainChanceText} />
          <Text style={styles.tinyText}>{rainChanceText}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 62,
    maxWidth: 62,
  },
  cardContainer: {
    alignItems: 'center',
    backgroundColor: '#262626',
    paddingVertical: 6,
    borderRadius: 4,
    flexGrow: 1,
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    marginTop: 2,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  smallText: {
    color: '#fff',
    fontSize: 12,
  },
  tinyText: {
    color: '#fff',
    fontSize: 11,
  },
});
