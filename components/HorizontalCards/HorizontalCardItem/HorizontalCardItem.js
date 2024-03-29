import { StyleSheet, Text, View } from 'react-native';
import Icon from '../../Icon/Icon';
import { getWeatherIcon } from '../../../utility/weatherCodeHelper';

export default function HorizontalCardItem(props) {
  const {
    timeText,
    hourIndex,
    temperatureText,
    secondaryTemperatureText,
    rainChanceText,
    weatherCode,
  } = props;
  const weatherIcon = getWeatherIcon(weatherCode, hourIndex);

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.text}>{timeText}</Text>
        <Icon name={weatherIcon} size={30} />
        <Text style={styles.smallText}>{temperatureText}</Text>
        {secondaryTemperatureText && (
          <Text style={[styles.smallText, styles.secondaryText]}>
            {secondaryTemperatureText}
          </Text>
        )}
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
    width: 60,
    flex: 1,
    marginHorizontal: 2,
  },
  cardContainer: {
    alignItems: 'center',
    backgroundColor: '#262626',
    paddingVertical: 6,
    paddingHorizontal: 4,
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
    // fontSize: 11,
  },
  tinyText: {
    color: '#fff',
    // fontSize: 11,
  },
  secondaryText: {
    color: '#ccc',
  },
});
