import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import VerticalListItem from './VerticalListItem/VerticalListItem';

export default function VerticalList(props) {
  const { weeklyForecastData } = props;
  const [listItems, setListItems] = useState();

  useEffect(() => {
    setListItems(weeklyForecastData);
  }, []);

  return (
    <View style={styles.container}>
      {listItems?.map((listItem, index) => (
        <VerticalListItem key={listItem.date + index} {...listItem} />
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
