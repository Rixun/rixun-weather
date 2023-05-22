import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import VerticalListItem from './VerticalListItem/VerticalListItem';

export default function VerticalList() {
  const exampleData = [
    { day: 'Today', rainChance: '10%', tempMin: 15, tempMax: 22 },
    { day: 'Thursday', rainChance: '20%', tempMin: 15, tempMax: 22 },
    { day: 'Friday', rainChance: '30%', tempMin: 15, tempMax: 22 },
    { day: 'Saturday', rainChance: '40%', tempMin: 15, tempMax: 22 },
    { day: 'Sunday', rainChance: '50%', tempMin: 15, tempMax: 22 },
    { day: 'Monday', rainChance: '60%', tempMin: 15, tempMax: 22 },
    { day: 'Tuesday', rainChance: '70%', tempMin: 15, tempMax: 22 },
  ];
  const [listItems, setListItems] = useState();

  useEffect(() => {
    setListItems(exampleData);
  }, []);

  return (
    <View style={styles.container}>
      {listItems?.map((listItem, index) => (
        <VerticalListItem key={listItem.day + index} {...listItem} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: '800px',
    gap: '8px',
    paddingVertical: '16px',
    paddingHorizontal: '8px',
    backgroundColor: '#262626',
    borderRadius: '4px',
  },
});
