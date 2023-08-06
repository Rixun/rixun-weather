import { StyleSheet, ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import { useEffect } from 'react';
import { getWeatherForecast } from '../api/api';
import { useLocationStore, useWeatherStore } from '../store/store';
import Hero from '../components/Hero/Hero';
import DailyWeather from '../components/DailyWeather/DailyWeather';
import Icon from '../components/Icon/Icon';
import { Drawer } from 'expo-router/drawer';
import HourlyWeather from '../components/HourlyWeather/HourlyWeather';
import DefaultHomeScreen from '../components/DefaultHomeScreen/DefaultHomeScreen';

export default function Home() {
  const setAllForecast = useWeatherStore((state) => state.setAllForecast);
  const forecastData = useWeatherStore((state) => state.forecast);
  const defaultLocation = useLocationStore((state) => state.defaultLocation);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getWeatherForecast(defaultLocation);
      if (!result.error) {
        setAllForecast(result);
      }
    };
    if (Object.keys(defaultLocation).length > 0) {
      fetchData();
    }
  }, [defaultLocation]);

  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          title: '',
          headerRight: () => (
            <Link style={[styles.text, styles.headerLink]} href="/Search">
              <Icon name="Search" size={26} />
            </Link>
          ),
        }}
      />
      {Object.keys(forecastData).length > 0 ? (
        <>
          <Hero />
          <HourlyWeather />
          <DailyWeather />
        </>
      ) : (
        <DefaultHomeScreen />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#161616',
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  headerLink: {
    padding: 16,
  },
});
