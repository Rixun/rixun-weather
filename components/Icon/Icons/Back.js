import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 512 512"
    style={styles.svg}
    {...props}
  >
    <Path d="M352 128.4 319.7 96 160 256l159.7 160 32.3-32.4L224.7 256z" />
  </Svg>
);
export default SvgComponent;
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  svg: {
    enableBackground: 'new 0 0 512 512',
    stroke: '#fff',
    fill: '#fff',
  },
});
