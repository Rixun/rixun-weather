import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" id="Layer_3" data-name="Layer 3" viewBox="0 0 32 32" {...props}>
    <Path d="M24 18.75a8 8 0 0 1-16 0c0-4.42 8-13 8-13s8 8.58 8 13Z" style={styles.cls1} />
    {/* Path below this line is to add some like shiny marks to the water drop which isnt needed */}
    {/* <Path d="M13.06 13.51a45.75 45.75 0 0 1 2.48-3.34M10.81 18.43a7.25 7.25 0 0 1 1.1-3"  style={styles.cls2} /> */}
    {/* The below path fills in the water drop slightly, can likely find some way to modify this to produce different effects */}
    <Path d="M24 18.75c0 4.42-3.58 7-8 7s-8-2.58-8-7" style={styles.cls1} />
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
    // fill: '#0baeff',
  },
  cls2: {
    fill: 'none',
    stroke: '#0baeff',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
