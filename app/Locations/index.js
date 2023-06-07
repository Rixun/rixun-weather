import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';
import { useLocationStore } from '../../store/store';
import LocationListItem from '../../components/LocationListItem/LocationListItem';

export default function Locations() {
  const locations = useLocationStore((state) => state.locations);
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Locations',
          headerStyle: {
            backgroundColor: '#161616',
          },
          headerTintColor: '#fff',
        }}
      />
      <Text>Locations</Text>
      {locations.map((listItem, index) => (
        <LocationListItem listItem={listItem} key={listItem.name + index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
});