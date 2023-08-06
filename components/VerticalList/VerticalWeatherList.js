import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import VerticalListItem from './VerticalListItem/VerticalListItem';
import { useThemeStore } from '../../store/store';

export default function VerticalWeatherList(props) {
  const { weatherData } = props;

  return (
    <View style={styles.container}>
      <FlatList
        data={weatherData}
        initialNumToRender={7}
        renderItem={({ item }) => {
          return <VerticalListItem {...item} />;
        }}
        keyExtractor={(item, index) =>
          item.timeText + item.temperatureText + index
        }
        ItemSeparatorComponent={() => <View style={{ height: 8, width: 4 }} />}
      />
    </View>
  );
}

const secondaryBackgroundColor =
  useThemeStore.getState().secondaryBackgroundColor;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 768,
    maxHeight: 220,
    marginHorizontal: 'auto',
    padding: 8,
    borderRadius: 4,
    backgroundColor: secondaryBackgroundColor,
  },
});
