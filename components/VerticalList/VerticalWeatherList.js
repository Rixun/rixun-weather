import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import VerticalListItem from './VerticalListItem/VerticalListItem';

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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 768,
    maxHeight: 220,
    marginHorizontal: 'auto',
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: '#262626',
    borderRadius: 4,
  },
});
