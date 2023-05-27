import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import { useEffect } from 'react';
import { GetWeatherForecast } from '../api/api';
import { useWeatherStore } from '../store/store';
import WeeklyWeather from '../components/WeeklyWeather/WeeklyWeather';

export default function Home() {
  const setAllForecast = useWeatherStore((state) => state.setAllForecast);
  // const forecast = useWeatherStore((state) => state.forecast);
  // const current = useWeatherStore((state) => state.current);
  // const weekly = useWeatherStore((state) => state.weekly);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetWeatherForecast();
      setAllForecast(result);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Overview', headerShown: false }} />
      <Link style={styles.link} href="/Settings">
        Go to Settings
      </Link>
      <Link style={styles.link} href="/ForecastPage">
        Go to Forecast
      </Link>
      <WeeklyWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  link: {
    color: '#fff',
  },
});
