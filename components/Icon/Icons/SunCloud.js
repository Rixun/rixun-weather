import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, Circle, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 64 64" {...props}>
    <Defs>
      <LinearGradient
        id="linear-gradient"
        x1={46.72}
        x2={25.63}
        y1={58.39}
        y2={31.08}
        gradientTransform="matrix(-1 0 0 1 65.8 0)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#f2f2f2" />
        <Stop offset={1} stopColor="#cfcfcf" />
      </LinearGradient>
      <LinearGradient
        id="linear-gradient-2"
        x1={12.25}
        x2={23.86}
        y1={56.93}
        y2={74.58}
        gradientTransform="matrix(0 -1 -1 0 109.04 59.43)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.02} stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
    <Circle cx={39.8} cy={28} r={12.59} style={styles.cls1} />
    <Path
      d="M39.8 8v4.44M39.8 43.56V48M19.8 28h4.45M55.36 28h4.44M25.66 13.86 28.8 17M50.8 39l3.14 3.14M25.66 42.14 28.8 39M50.8 17l3.14-3.14"
      style={styles.cls2}
    />
    <Path
      d="M23.5 21.9A17.49 17.49 0 0 1 39 31.22a13.75 13.75 0 1 1 6.92 25.62l-22.42.06a17.5 17.5 0 0 1 0-35Z"
      style={{
        fill: 'url(#linear-gradient)',
      }}
    />
    <Circle
      cx={45.89}
      cy={43.09}
      r={13.75}
      style={{
        fill: 'url(#linear-gradient-2)',
      }}
      transform="rotate(-74.39 45.888 43.09)"
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
