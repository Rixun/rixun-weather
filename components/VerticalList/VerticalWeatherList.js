import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import WeeklyWeatherVerticalListItem from './VerticalListItem/WeeklyWeatherVerticalListItem';

export default function VerticalWeatherList(props) {
  const { listData } = props;

  // Future additions:
  // Add weekly vs daily switch here to determine style of list item if required
  // Add Scrollview to show 7 list items at a time, may need to provide a set height of list items to do so depending on how it works
  // or use FlatList?
  return (
    <View style={styles.container}>
      {listData?.map((listItem, index) => (
        <WeeklyWeatherVerticalListItem key={listItem.date + index} {...listItem} />
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
