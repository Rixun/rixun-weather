import { StyleSheet } from 'react-native';
import React from 'react';
import { useSettingStore, useWeatherStore } from '../../store/store';
import { HORIZONTAL_CARDS, NONE, VERTICAL_LIST } from '../../config/constants';
import HorizontalCards from '../HorizontalCards/HorizontalCards';
import VerticalWeatherList from '../VerticalList/VerticalWeatherList';
import { getShortenedWeekDay, getWeekDay } from '../../utility/dateHelper';

export default function DailyWeather() {
  const dailyViewType = useSettingStore((state) => state.dailyViewType);
  const dailyForecastData = useWeatherStore((state) => state.daily);

  const convertForecastData = (forecastData) => {
    return forecastData?.map((forecastItem) => {
      let timeText;
      const date = new Date(forecastItem.date).getDay();
      if (dailyViewType === HORIZONTAL_CARDS) {
        timeText = getShortenedWeekDay(date);
      } else {
        timeText = getWeekDay(date);
      }
      return {
        timeText: timeText,
        temperatureText: `${forecastItem.tempMax}°/${forecastItem.tempMin}°`,
        rainChanceText: `${forecastItem.rainChance}%`,
        weatherCode: forecastItem.weatherCode,
      };
    });
  };

  switch (dailyViewType) {
    case HORIZONTAL_CARDS:
      return (
        <HorizontalCards weatherData={convertForecastData(dailyForecastData)} />
      );
    case VERTICAL_LIST:
      return (
        <VerticalWeatherList
          weatherData={convertForecastData(dailyForecastData)}
        />
      );
    case NONE:
    default:
      return null;
  }
}

const styles = StyleSheet.create({});
