import { FlatList, StyleSheet, View } from 'react-native';
import HorizontalCardItem from './HorizontalCardItem/HorizontalCardItem';

export default function HorizontalCards(props) {
  const { weatherData, horizontal = true, numColumns = null } = props;

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={horizontal}
        numColumns={numColumns}
        data={weatherData}
        initialNumToRender={3}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => {
          return <HorizontalCardItem {...item} />;
        }}
        keyExtractor={(item, index) =>
          item.timeText + item.temperatureText + index
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 768,
  },
  contentContainer: {
    marginLeft: -2,
  },
});
