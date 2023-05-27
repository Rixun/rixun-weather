import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, Path, Circle } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 64 64" {...props}>
    <Defs>
      <LinearGradient
        id="linear-gradient"
        x1={-397.28}
        x2={-418.37}
        y1={52.39}
        y2={25.08}
        gradientTransform="matrix(-1 0 0 1 -378.03 0)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#f2f2f2" />
        <Stop offset={1} stopColor="#cfcfcf" />
      </LinearGradient>
      <LinearGradient
        id="linear-gradient-2"
        x1={-430.14}
        x2={-418.52}
        y1={51.15}
        y2={68.8}
        gradientTransform="matrix(0 -1 -1 0 103.42 -388.95)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.02} stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
    <Path
      d="M50 20.71A13.88 13.88 0 0 1 37.86 2.77a.6.6 0 0 0-.86-.69A13.88 13.88 0 1 0 55.92 21a.6.6 0 0 0-.69-.89 13.91 13.91 0 0 1-5.23.6Z"
      style={{
        fill: '#efcc00',
      }}
    />
    <Path
      d="M23.66 15.9a17.49 17.49 0 0 1 15.47 9.32A13.75 13.75 0 1 1 46 50.84l-22.39.06a17.5 17.5 0 0 1 0-35Z"
      style={{
        fill: 'url(#linear-gradient)',
      }}
    />
    <Circle
      cx={46.05}
      cy={37.09}
      r={13.75}
      style={{
        fill: 'url(#linear-gradient-2)',
      }}
      transform="rotate(-74.39 46.051 37.087)"
    />
    <Path d="M32.5 55.5v1M26.5 53.5v1M38.5 53.5v1M38.5 59.5v1M26.5 59.5v1M32.5 61.5v1" style={styles.cls1} />
  </Svg>
);
export default SvgComponent;
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  cls1: {
    fill: 'none',
    stroke: '#0baeff',
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
    strokeWidth: '3px',
  },
});
