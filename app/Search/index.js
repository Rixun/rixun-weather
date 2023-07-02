import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { useLocationStore, useSearchStore } from '../../store/store';
import LocationListItem from '../../components/LocationListItem/LocationListItem';
import SearchBar from './SearchBar/SearchBar';
import BackButton from '../../components/BackButton/BackButton';
import { Drawer } from '../../utility/Drawer';

export default function Search() {
  const router = useRouter();
  const searchList = useSearchStore((state) => state.searchList);
  const setSearchList = useSearchStore((state) => state.setSearchList);
  const addNewLocation = useLocationStore((state) => state.addNewLocation);
  const setDefaultLocation = useLocationStore(
    (state) => state.setDefaultLocation
  );
  const [searchText, setSearchText] = useState('');

  const clearFields = () => {
    setSearchList([]);
    setSearchText('');
  };

  const onPress = (listItem) => {
    addNewLocation({
      name: listItem.name,
      latitude: listItem.latitude,
      longitude: listItem.longitude,
      admin1: listItem.admin1,
      country: listItem.country,
    });
    setDefaultLocation({
      name: listItem.name,
      latitude: listItem.latitude,
      longitude: listItem.longitude,
      admin1: listItem.admin1,
      country: listItem.country,
    });
    clearFields();
    router.back();
  };
  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          headerTitleContainerStyle: { flex: 1, width: '100%' },
          headerRightContainerStyle: { flex: 0, width: 16 },
          headerLeft: () => <BackButton onBack={clearFields} />,
          headerTitle: () => (
            <SearchBar searchText={searchText} setSearchText={setSearchText} />
          ),
        }}
      />
      {searchList.map((listItem, index) => (
        <LocationListItem
          listItem={listItem}
          onPress={onPress}
          key={listItem.name + index}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
});
