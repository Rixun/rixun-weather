import * as React from 'react';
import Svg, { Defs, Circle, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 64 64" {...props}>
    <Defs></Defs>
    <Circle cx={32} cy={32} r={17} style={styles.cls1} />
    <Path
      d="M32 5v6M32 53v6M59 32h-6M11 32H5M51.09 12.91l-4.24 4.24M17.15 46.85l-4.24 4.24M51.09 51.09l-4.24-4.24M17.15 17.15l-4.24-4.24"
      style={styles.cls2}
    />
  </Svg>
);
export default SvgComponent;
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  cls1: {
    fill: '#efcc00',
  },
  cls2: {
    fill: 'none',
    stroke: '#efcc00',
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
    strokeWidth: '3px',
  },
});
