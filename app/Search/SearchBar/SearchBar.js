import { StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useSearchStore } from '../../../store/store';
import { getSuburbs } from '../../../api/api';

export default function SearchBar({
  searchText,
  setSearchText,
  setLoading,
  setHasSearched,
}) {
  const searchInputRef = useRef(null);
  const setSearchList = useSearchStore((state) => state.setSearchList);
  let idleTimer;
  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);
  useEffect(() => {
    const search = () => {
      setHasSearched(true);
      setLoading(true);
      idleTimer = setTimeout(async () => {
        const searchListResults = await getSuburbs(searchText);
        if (!searchListResults.error) {
          setSearchList(searchListResults);
        } else {
          setSearchList([]);
        }
        setLoading(false);
      }, 1000);
    };
    if (searchText?.trim() !== '') {
      search();
    }
    return () => {
      clearTimeout(idleTimer);
      setHasSearched(false);
    };
  }, [searchText]);

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
    paddingBottom: 5,
  },
});
