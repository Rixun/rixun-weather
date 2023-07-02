import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocationStore } from '../../store/store';
import LocationListItem from '../../components/LocationListItem/LocationListItem';
import { Drawer } from '../../utility/Drawer';
import { useRouter } from 'expo-router';

export default function Locations() {
  const router = useRouter();
  const locations = useLocationStore((state) => state.locations);
  const removeLocation = useLocationStore((state) => state.removeLocation);
  const setDefaultLocation = useLocationStore(
    (state) => state.setDefaultLocation
  );

  const onLocationPress = (locationData) => {
    setDefaultLocation(locationData);
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          title: 'Locations',
        }}
      />
      {/* TODO: If locations is empty, have button link to search page */}
      {locations.map((listItem, index) => (
        <LocationListItem
          listItem={listItem}
          key={listItem.name + index}
          onPress={onLocationPress}
          onRemove={removeLocation}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
});
