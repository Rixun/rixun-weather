import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from '../../Icon/Icon';
import { getWeatherIcon } from '../../../utility/weatherCodeHelper';

export default function VerticalListItem(props) {
  const { timeText, weatherCode, rainChanceText, temperatureText } = props;
  const weatherIcon = getWeatherIcon(weatherCode);
  // console.log(rainChanceText);
  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.subContainer, styles.flexBig]}>
        <Text style={styles.text}>{timeText}</Text>
      </View>
      <View style={[styles.container, styles.subContainer]}>
        <Icon name="Raindrop" size={14} rainChanceText={rainChanceText} />
        <Text style={styles.text}>{rainChanceText}</Text>
      </View>
      <View style={[styles.container, styles.subContainer]}>
        <Icon name={weatherIcon} size={20} style={styles.icon} />
        {/* <Icon name="Moon" width={20} height={20} style={styles.icon} /> */}
      </View>
      <View style={[styles.container, styles.subContainer, styles.flexReverse]}>
        <Text style={styles.text}>{temperatureText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  subContainer: {
    flexBasis: '20%',
    flexGrow: 1,
  },
  flexBig: {
    flexBasis: '30%',
  },
  flexReverse: {
    flexDirection: 'row-reverse',
  },
  text: {
    color: '#FFF',
    letterSpacing: 0.2,
  },
  icon: {
    paddingRight: 2,
  },
});
