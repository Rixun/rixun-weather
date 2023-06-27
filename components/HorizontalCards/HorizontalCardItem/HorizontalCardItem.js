import { StyleSheet, Text, View } from 'react-native';
import Icon from '../../Icon/Icon';
import { getWeatherIcon } from '../../../utility/weatherCodeHelper';

export default function HorizontalCardItem({
  topCardText,
  bottomCardText,
  weatherCode,
}) {
  const weatherIcon = getWeatherIcon(weatherCode);

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.text}>{topCardText}</Text>
      <Icon name={weatherIcon} width={35} height={35} style={styles.icon} />
      <Text style={styles.smallText}>{bottomCardText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    backgroundColor: '#262626',
    height: 90,
    minWidth: 40,
    padding: 8,
    borderRadius: 4,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  smallText: {
    color: '#fff',
    fontSize: 12,
  },
  icon: {
    paddingVertical: 2,
  },
});
