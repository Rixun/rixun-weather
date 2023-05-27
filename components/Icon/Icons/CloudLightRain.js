import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, Path, Circle } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 64 64" {...props}>
    <Defs>
      <LinearGradient
        id="linear-gradient"
        x1={-101.28}
        x2={-122.37}
        y1={46.39}
        y2={19.08}
        gradientTransform="matrix(-1 0 0 1 -82.03 0)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#f2f2f2" />
        <Stop offset={1} stopColor="#cfcfcf" />
      </LinearGradient>
      <LinearGradient
        id="linear-gradient-2"
        x1={-137.98}
        x2={-126.37}
        y1={85.19}
        y2={102.84}
        gradientTransform="matrix(0 -1 -1 0 137.46 -102.8)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.02} stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
    <Path d="M32.5 50.5v1M26.5 48.5v1M38.5 48.5v1M38.5 54.5v1M26.5 54.5v1M32.5 56.5v1" style={styles.cls1} />
    <Path
      d="M23.66 9.9a17.49 17.49 0 0 1 15.47 9.32A13.75 13.75 0 1 1 46 44.84l-22.39.06a17.5 17.5 0 0 1 0-35Z"
      style={{
        fill: 'url(#linear-gradient)',
      }}
    />
    <Circle
      cx={46.05}
      cy={31.09}
      r={13.75}
      style={{
        fill: 'url(#linear-gradient-2)',
      }}
      transform="rotate(-74.39 46.055 31.09)"
    />
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
