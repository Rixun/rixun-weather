import { StyleSheet, View } from 'react-native';
import React from 'react';
import Icons from './IconMap';

export default function Icon(props) {
  const { name, width, height, ...extraProps } = props;
  const Icon = Icons[name] || '';

  return Icon ? (
    <View style={styles.container}>
      <Icon width={width} height={height} {...extraProps} />
    </View>
  ) : (
    <></>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
