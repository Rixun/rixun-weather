import { StyleSheet } from 'react-native';
import React from 'react';
import { useSettingStore, useWeatherStore } from '../../store/store';
import { HORIZONTAL_CARDS, NONE, VERTICAL_LIST } from '../../config/constants';
import HorizontalCards from '../HorizontalCards/HorizontalCards';
import VerticalWeatherList from '../VerticalList/VerticalWeatherList';
import { getShortenedWeekDay } from '../../utility/dateHelper';

export default function DailyWeather() {
  const dailyViewType = useSettingStore((state) => state.dailyViewType);
  const dailyForecastData = useWeatherStore((state) => state.daily);

  const convertCardForecastData = (forecastData) => {
    return forecastData?.map((forecastItem) => ({
      topCardText: getShortenedWeekDay(new Date(forecastItem.date).getDay()),
      bottomCardText: `${forecastItem.tempMax} | ${forecastItem.tempMin}`,
      weatherCode: forecastItem.weatherCode,
    }));
  };

  switch (dailyViewType) {
    case HORIZONTAL_CARDS:
      return (
        <HorizontalCards
          weatherData={convertCardForecastData(dailyForecastData)}
        />
      );
    case VERTICAL_LIST:
      return <VerticalWeatherList listData={dailyForecastData} />;
    case NONE:
    default:
      return null;
  }
}

const styles = StyleSheet.create({});
