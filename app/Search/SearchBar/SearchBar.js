import { StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useSearchStore } from '../../../store/store';
import { getSuburbs } from '../../../api/api';

export default function SearchBar({ searchText, setSearchText }) {
  const searchInputRef = useRef(null);
  const setSearchList = useSearchStore((state) => state.setSearchList);
  let idleTimer;
  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);
  useEffect(() => {
    if (searchText?.trim() !== '') search();
  }, [searchText]);

  const search = () => {
    idleTimer = setTimeout(async () => {
      const searchList = await getSuburbs(searchText);
      console.log(searchList);
      setSearchList(searchList);
    }, 1000);
  };

  return (
    <TextInput
      value={searchText}
      onChangeText={(input) => {
        clearTimeout(idleTimer);
        setSearchText(input);
      }}
      placeholder={'Search'}
      style={styles.searchBar}
      cursorColor={'#fff'}
      placeholderTextColor={'#aaa'}
      autoFocus={true}
    />
  );
}

const styles = StyleSheet.create({
  searchBar: {
    color: '#fff',
    fontSize: 20,
    width: '100%',
  },
});
