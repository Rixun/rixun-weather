import { StyleSheet, View } from 'react-native';
import HorizontalCardItem from './HorizontalCardItem/HorizontalCardItem';

export default function HorizontalCards(props) {
  const { data } = props;

  return (
    <View style={styles.container}>
      {data?.map((data, index) => (
        <HorizontalCardItem
          key={data.date + index}
          day={data.date}
          dailyMaxTemp={data.tempMax}
          dailyMinTemp={data.tempMin}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
