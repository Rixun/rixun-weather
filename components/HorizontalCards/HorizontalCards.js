import { FlatList, StyleSheet, View } from 'react-native';
import HorizontalCardItem from './HorizontalCardItem/HorizontalCardItem';

export default function HorizontalCards(props) {
  const { weatherData } = props;

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={weatherData}
        initialNumToRender={3}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => {
          return <HorizontalCardItem {...item} />;
        }}
        keyExtractor={(item, index) =>
          item.timeText + item.temperatureText + index
        }
        ItemSeparatorComponent={() => <View style={{ height: 4, width: 4 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 768,
    marginHorizontal: 'auto',
  },
  contentContainer: {
    marginHorizontal: 'auto',
  },
});
