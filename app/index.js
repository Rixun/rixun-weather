import { View, StyleSheet, Button } from 'react-native';
import { Link, Stack } from 'expo-router';
import { useEffect } from 'react';
import { GetWeatherForecast } from '../api/api';
import { useWeatherStore } from '../store/store';
import Hero from '../components/Hero/Hero';
import WeeklyWeather from '../components/WeeklyWeather/WeeklyWeather';
import Icon from '../components/Icon/Icon';

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
      <Stack.Screen
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#161616',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <Link style={[styles.link, styles.headerLink]} href="/Search">
              Search
            </Link>
          ),
        }}
      />
      <Link style={styles.link} href="/Settings">
        Go to Settings
      </Link>
      <Icon name="Fog" width={100} height={100} />
      <Hero />
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
  headerLink: {
    padding: 16,
  },
});
