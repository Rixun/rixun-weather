import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from '../../Icon/Icon';
import { getWeekDay } from '../../../utility/dateHelper';
import { getWeatherIcon } from '../../../utility/weatherCodeHelper';

export default function WeeklyWeatherVerticalListItem(props) {
  const { date, weatherCode, rainChance = '0%', tempMin, tempMax } = props;
  const [year, month, day] = date.split('-');
  const weekday = getWeekDay(new Date(year, month - 1, day).getDay());
  const weatherIcon = getWeatherIcon(weatherCode);
  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.subContainer]}>
        <Text style={styles.text}>{weekday}</Text>
        <View style={styles.container}>
          <Icon name="RaindropEmpty" width={14} height={14} />
          <Text style={styles.text}>{rainChance}</Text>
        </View>
      </View>
      <View style={[styles.container, styles.subContainer]}>
        <View style={styles.container}>
          <Icon name={weatherIcon} width={20} height={20} style={styles.icon} />
          {/* <Icon name="Moon" width={20} height={20} style={styles.icon} /> */}
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>{tempMax}°/</Text>
          <Text style={styles.text}>{tempMin}°</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    flexBasis: 0,
    flexGrow: 1,
    paddingHorizontal: 8,
  },
  text: {
    color: '#FFF',
    paddingHorizontal: 1,
  },
  icon: {
    paddingHorizontal: 2,
  },
});
