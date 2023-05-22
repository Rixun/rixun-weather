import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from '../../Icon/Icon';

export default function VerticalListItem(props) {
  const { day, rainChance, tempMin, tempMax } = props;
  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.subContainer]}>
        <Text style={styles.text}>{day}</Text>
        <View style={styles.container}>
          <Icon name="RaindropEmpty" width={14} height={14} />
          <Text style={styles.text}>{rainChance}</Text>
        </View>
      </View>
      <View style={[styles.container, styles.subContainer]}>
        <View style={styles.container}>
          <Icon name="Sun" width={20} height={20} style={styles.icon} />
          <Icon name="Moon" width={20} height={20} style={styles.icon} />
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>{tempMin}°/</Text>
          <Text style={styles.text}>{tempMax}°</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    flexBasis: 0,
    flexGrow: 1,
    paddingHorizontal: '8px',
  },
  text: {
    color: '#FFF',
  },
  icon: {
    paddingHorizontal: '2px',
  },
});
