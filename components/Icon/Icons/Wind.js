import * as React from 'react';
import Svg, { Defs, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 64 64" {...props}>
    <Defs></Defs>
    <Path
      d="M9.5 40.5h26.67a5.5 5.5 0 0 1 5.5 5.5h0a5.5 5.5 0 0 1-5.5 5.5M41.5 16.5A3.5 3.5 0 0 1 45 20h0a3.5 3.5 0 0 1-3.5 3.5h-32"
      style={[styles.cls1, styles.strokelevel]}
    />
    <Path d="M40.5 32.5H53a2.67 2.67 0 0 1 2.67 2.67h0A2.67 2.67 0 0 1 53 37.83" style={[styles.cls2, styles.strokelevel]} />
    <Path d="M26.5 32.5h8" style={[styles.cls2, styles.strokelevel]} />
    <Path d="M9.5 32.5h11" style={[styles.cls2, styles.strokelevel]} />
  </Svg>
);
export default SvgComponent;
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  strokelevel: {
    fill: 'none',
    strokeLinecap: 'round',
    strokeMiterlimit: '10',
    strokeWidth: '3px',
  },
  cls1: {
    stroke: '#a5a9aa',
  },
  cls2: {
    stroke: '#b9c1c6',
  },
});
