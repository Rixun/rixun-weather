import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 32 32" {...props}>
    <Path d="M24 18.75a8 8 0 0 1-16 0c0-4.42 8-13 8-13s8 8.58 8 13Z" style={styles.cls1} />
    {/* The below path fills in the water drop slightly, can likely find some way to modify this to produce different effects */}
    {/* <Path d="M24 18.75c0 4.42-3.58 7-8 7s-8-2.58-8-7" style={styles.cls1} /> */}
  </Svg>
);
export default SvgComponent;
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  cls1: {
    fill: 'none',
    stroke: '#0baeff',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    fill: '#0baeff',
  },
});
