import { StyleSheet, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { useLocationStore, useSearchStore } from '../../store/store';
import LocationListItem from '../../components/LocationListItem/LocationListItem';
import SearchBar from './SearchBar/SearchBar';
import BackButton from '../../components/BackButton/BackButton';

export default function Search() {
  const router = useRouter();
  const searchList = useSearchStore((state) => state.searchList);
  const setSearchList = useSearchStore((state) => state.setSearchList);
  const addNewLocation = useLocationStore((state) => state.addNewLocation);
  const [searchText, setSearchText] = useState('');

  const clearFields = () => {
    setSearchList([]);
    setSearchText('');
  };

  const onPress = (listItem) => {
    addNewLocation({
      name: listItem.name,
      latitude: listItem.latitude,
      longitde: listItem.longitude,
      admin1: listItem.admin1,
      country: listItem.country,
    });
    clearFields();
    router.back();
  };
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Search',
          headerStyle: {
            backgroundColor: '#161616',
          },
          headerTintColor: '#fff',
          headerTitleContainerStyle: { flex: 1, width: '100%' },
          headerRightContainerStyle: { flex: 0, width: 16 },
          headerLeft: () => <BackButton />,
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
    padding: 4,
  },
});