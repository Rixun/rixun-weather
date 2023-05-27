import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSettingStore, useWeatherStore } from '../../store/store';
import { HORIZONTAL_CARDS, NONE, VERTICAL_LIST } from '../../config/constants';
import VerticalWeatherList from '../VerticalList/VerticalWeatherList';

export default function WeeklyWeather() {
  const weeklyViewType = useSettingStore((state) => state.weeklyViewType);
  const weeklyForecastData = useWeatherStore((state) => state.weekly);

  switch (weeklyViewType) {
    case HORIZONTAL_CARDS:
      return (
        <View>
          <Text>Weekly view Horizontal Cards</Text>
        </View>
      );
    case VERTICAL_LIST:
      return <VerticalWeatherList listData={weeklyForecastData} />;
    case NONE:
    default:
      return null;
  }
}

const styles = StyleSheet.create({});
