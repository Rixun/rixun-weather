import { View, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';
import { useEffect } from 'react';
import { GetWeatherForecast } from '../api/api';
import { useWeatherStore } from '../store/store';
import Hero from '../components/Hero/Hero';
import WeeklyWeather from '../components/WeeklyWeather/WeeklyWeather';
import Icon from '../components/Icon/Icon';
import { Drawer } from '../utility/Drawer';

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
      <Drawer.Screen
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <Link style={[styles.link, styles.headerLink]} href="/Search">
              <Icon name="Search" size={26} />
            </Link>
          ),
        }}
      />
      {/* <Icon name="Back" width={100} height={100} /> */}
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
