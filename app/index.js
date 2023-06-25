import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useEffect } from 'react';
import { getWeatherForecast } from '../api/api';
import { useLocationStore, useWeatherStore } from '../store/store';
import Hero from '../components/Hero/Hero';
import DailyWeather from '../components/DailyWeather/DailyWeather';
import Icon from '../components/Icon/Icon';
import { Drawer } from '../utility/Drawer';

export default function Home() {
  const setAllForecast = useWeatherStore((state) => state.setAllForecast);
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
    <ScrollView contentContainerStyle={styles.container}>
      <Drawer.Screen
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <Link style={[styles.text, styles.headerLink]} href="/Search">
              <Icon name="Search" size={26} />
            </Link>
          ),
        }}
      />
      {Object.keys(defaultLocation).length > 0 ? (
        <>
          <Hero />
          <DailyWeather />
        </>
      ) : (
        <Link style={styles.text} href="/Search">
          <View>
            <Icon name="Search" width={100} height={100} />
            <Text style={styles.text}>Search Location</Text>
          </View>
        </Link>
      )}
    </ScrollView>
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
  text: {
    color: '#fff',
  },
  headerLink: {
    padding: 16,
  },
});
