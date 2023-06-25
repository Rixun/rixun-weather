import { StyleSheet, View } from 'react-native';
import React from 'react';
import DailyWeatherVerticalListItem from './VerticalListItem/DailyWeatherVerticalListItem';

export default function VerticalWeatherList(props) {
  const { listData } = props;

  // Future additions:
  // Add daily vs hourly switch here to determine style of list item if required
  // Add Scrollview to show 7 list items at a time, may need to provide a set height of list items to do so depending on how it works
  // or use FlatList?
  return (
    <View style={styles.container}>
      {listData?.map((listItem, index) => (
        <DailyWeatherVerticalListItem
          key={listItem.date + index}
          {...listItem}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 800,
    gap: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: '#262626',
    borderRadius: 4,
  },
});
