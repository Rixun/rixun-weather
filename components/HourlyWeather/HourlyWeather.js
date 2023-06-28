import { StyleSheet } from 'react-native';
import React from 'react';
import { useSettingStore, useWeatherStore } from '../../store/store';
import { HORIZONTAL_CARDS, NONE, VERTICAL_LIST } from '../../config/constants';
import HorizontalCards from '../HorizontalCards/HorizontalCards';
import VerticalWeatherList from '../VerticalList/VerticalWeatherList';
import { convertIndexToHour } from '../../utility/dateHelper';

export default function HourlyWeather() {
  const hourlyViewType = useSettingStore((state) => state.hourlyViewType);
  const hourlyForecastData = useWeatherStore((state) => state.hourly);

  // console.log(hourlyForecastData);
  const convertCardForecastData = (forecastData) => {
    return forecastData?.map((forecastItem, index) => ({
      timeText: convertIndexToHour(index),
      temperatureText: `${forecastItem.temperature}°`,
      rainChanceText: `${forecastItem.rainChance}%`,
      weatherCode: forecastItem.weatherCode,
    }));
  };

  switch (hourlyViewType) {
    case HORIZONTAL_CARDS:
      return (
        <HorizontalCards
          weatherData={convertCardForecastData(hourlyForecastData)}
        />
      );
    case VERTICAL_LIST:
      return <VerticalWeatherList listData={hourlyForecastData} />;
    case NONE:
    default:
      return null;
  }
}

const styles = StyleSheet.create({});
