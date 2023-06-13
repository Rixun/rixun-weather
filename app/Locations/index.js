import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocationStore } from '../../store/store';
import LocationListItem from '../../components/LocationListItem/LocationListItem';
import { Drawer } from '../../utility/Drawer';

export default function Locations() {
  const locations = useLocationStore((state) => state.locations);
  const setDefaultLocation = useLocationStore(
    (state) => state.setDefaultLocation
  );

  const onLocationPress = (locationData) => {
    setDefaultLocation(locationData);
    // set this as current location
    // refresh API for new data? not sure if i should be doing it here or not
  };

  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          title: 'Locations',
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
        }}
      />
      {/* TODO: If locations is empty, have button link to search page */}
      {locations.map((listItem, index) => (
        <LocationListItem
          listItem={listItem}
          key={listItem.name + index}
          onPress={onLocationPress}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    padding: 4,
  },
});
