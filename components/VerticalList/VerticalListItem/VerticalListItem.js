import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from '../../Icon/Icon';
import { getWeatherIcon } from '../../../utility/weatherCodeHelper';

export default function VerticalListItem(props) {
  const {
    timeText,
    hourIndex,
    weatherCode,
    rainChanceText,
    temperatureText,
    secondaryTemperatureText,
  } = props;
  const weatherIcon = getWeatherIcon(weatherCode, hourIndex);
  return (
    <View style={styles.container}>
      <View style={[styles.subContainer, styles.flexStart]}>
        <Text style={styles.text}>{timeText}</Text>
      </View>
      <View style={[styles.subContainer, styles.flexReverse]}>
        <Text style={styles.text}>{rainChanceText}</Text>
        <Icon name="Raindrop" size={14} rainChanceText={rainChanceText} />
      </View>
      <View style={[styles.subContainer]}>
        <Icon name={weatherIcon} size={20} style={styles.icon} />
        {/* <Icon name="Moon" width={20} height={20} style={styles.icon} /> */}
      </View>
      <View style={[styles.subContainer, styles.flexEnd]}>
        <Text style={styles.text}>{temperatureText} </Text>
        {secondaryTemperatureText && (
          <Text style={[styles.text, styles.secondaryText]}>
            / {secondaryTemperatureText}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  subContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  flexStart: {
    alignItems: 'flex-start',
  },
  flexReverse: {
    flexDirection: 'row-reverse',
  },
  flexEnd: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  text: {
    color: '#FFF',
    letterSpacing: 0.2,
  },
  icon: {
    paddingRight: 2,
  },
});
