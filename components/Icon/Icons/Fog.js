import * as React from 'react';
import Svg, { Defs, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 64 64"
    {...props}
  >
    <Defs></Defs>
    <Path
      d="M16.5 17.5h13M9.5 22.5h13M6.5 27.5h49"
      style={[styles.cls1, styles.strokelevel]}
    />
    <Path d="M39.5 32.5h18" style={[styles.cls2, styles.strokelevel]} />
    <Path d="M6.5 32.5h25" style={[styles.cls1, styles.strokelevel]} />
    <Path
      d="M30.5 37.5h26M15.5 42.5h37M25.5 47.5h17M8.5 37.5h15"
      style={[styles.cls2, styles.strokelevel]}
    />
    <Path d="M28.5 22.5h7" style={[styles.cls1, styles.strokelevel]} />
    <Path d="M45.5 22.5h7" style={[styles.cls2, styles.strokelevel]} />
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
    stroke: '#b9c1c6',
  },
  cls2: {
    stroke: '#a5a9aa',
  },
});