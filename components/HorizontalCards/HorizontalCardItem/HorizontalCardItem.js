import { StyleSheet, Text, View } from 'react-native';
import Icon from '../../Icon/Icon';
import { getWeatherIcon } from '../../../utility/weatherCodeHelper';
import { useThemeStore } from '../../../store/store';

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
        <Text style={[styles.textColor, styles.text]}>{timeText}</Text>
        <Icon name={weatherIcon} size={30} />
        <Text style={[styles.textColor, styles.smallText]}>
          {temperatureText}
        </Text>
        {secondaryTemperatureText && (
          <Text style={[styles.smallText, styles.secondaryText]}>
            {secondaryTemperatureText}
          </Text>
        )}
        <View style={styles.rowContainer}>
          <Icon name="Raindrop" size={11} rainChanceText={rainChanceText} />
          <Text style={[styles.textColor, styles.tinyText]}>
            {rainChanceText}
          </Text>
        </View>
      </View>
    </View>
  );
}

const secondaryBackgroundColor =
  useThemeStore.getState().secondaryBackgroundColor;
const textColor = useThemeStore.getState().textColor;
const secondaryTextColor = useThemeStore.getState().secondaryTextColor;

const styles = StyleSheet.create({
  container: {
    width: 60,
    flex: 1,
    marginLeft: 4,
  },
  cardContainer: {
    alignItems: 'center',
    backgroundColor: secondaryBackgroundColor,
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
  textColor: {
    color: textColor,
  },
  text: {
    fontSize: 16,
  },
  smallText: {
    fontSize: 11,
  },
  tinyText: {
    fontSize: 11,
  },
  secondaryText: {
    color: secondaryTextColor,
  },
});
