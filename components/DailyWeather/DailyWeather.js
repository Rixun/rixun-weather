import { StyleSheet } from 'react-native';
import React from 'react';
import { useSettingStore, useWeatherStore } from '../../store/store';
import { HORIZONTAL_CARDS, NONE, VERTICAL_LIST } from '../../config/constants';
import HorizontalCards from '../HorizontalCards/HorizontalCards';
import VerticalWeatherList from '../VerticalList/VerticalWeatherList';

export default function DailyWeather() {
  const dailyViewType = useSettingStore((state) => state.dailyViewType);
  const dailyForecastData = useWeatherStore((state) => state.daily);

  switch (dailyViewType) {
    case HORIZONTAL_CARDS:
      return <HorizontalCards data={dailyForecastData} />;
    case VERTICAL_LIST:
      return <VerticalWeatherList listData={dailyForecastData} />;
    case NONE:
    default:
      return null;
  }
}

const styles = StyleSheet.create({});
