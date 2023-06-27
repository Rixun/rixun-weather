import { FlatList, StyleSheet, View } from 'react-native';
import HorizontalCardItem from './HorizontalCardItem/HorizontalCardItem';

export default function HorizontalCards(props) {
  const { weatherData } = props;

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        initialNumToRender={3}
        data={weatherData}
        renderItem={({ item }) => {
          return <HorizontalCardItem {...item} />;
        }}
        keyExtractor={(item, index) =>
          item.topCardText + item.bottomCardText + index
        }
        ItemSeparatorComponent={() => <View style={{ height: 8, width: 8 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
});
