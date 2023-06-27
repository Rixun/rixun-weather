import { StyleSheet } from 'react-native';
import React from 'react';
import { useSettingStore, useWeatherStore } from '../../store/store';
import { HORIZONTAL_CARDS, NONE, VERTICAL_LIST } from '../../config/constants';
import HorizontalCards from '../HorizontalCards/HorizontalCards';
import VerticalWeatherList from '../VerticalList/VerticalWeatherList';

export default function HourlyWeather() {
  const hourlyViewType = useSettingStore((state) => state.hourlyViewType);
  const hourlyForecastData = useWeatherStore((state) => state.hourly);

  // console.log(hourlyForecastData);
  const convertCardForecastData = (forecastData) => {
    return forecastData?.map((forecastItem, index) => ({
      topCardText: index, // need to convert to hour value
      bottomCardText: `${forecastItem.temperature}`,
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
