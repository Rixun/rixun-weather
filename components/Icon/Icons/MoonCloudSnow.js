import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, Path, Circle } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 64 64" {...props}>
    <Defs>
      <LinearGradient
        id="linear-gradient"
        x1={-249.28}
        x2={-270.37}
        y1={52.39}
        y2={25.08}
        gradientTransform="matrix(-1 0 0 1 -230.03 0)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#f2f2f2" />
        <Stop offset={1} stopColor="#cfcfcf" />
      </LinearGradient>
      <LinearGradient
        id="linear-gradient-2"
        x1={-344.59}
        x2={-332.98}
        y1={62.87}
        y2={80.52}
        gradientTransform="matrix(0 -1 -1 0 115.15 -303.41)"
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
    <Path
      d="M32.13 32.1v10.13M33.3 30.79l-1.17 1.47-1.18-1.47M30.95 43.55l1.18-1.47 1.17 1.47M36.51 34.63l-8.77 5.07M38.24 35l-1.86-.29.68-1.75M26.01 39.34l1.86.28-.68 1.76M36.51 39.7l-8.77-5.07M37.06 41.38l-.68-1.76 1.86-.28M27.19 32.96l.68 1.75-1.86.29"
      style={styles.cls4}
    />
    <Circle cx={26.5} cy={57.63} r={2} style={styles.cls5} />
    <Circle cx={36.5} cy={60.63} r={1.5} style={styles.cls6} />
    <Circle cx={18.5} cy={53.63} r={1.5} style={styles.cls6} />
    <Circle cx={32.5} cy={53.63} r={1} style={styles.cls7} />
    <Circle cx={46.5} cy={60.63} r={1} style={styles.cls7} />
    <Circle cx={17.5} cy={60.63} r={1} style={styles.cls7} />
    <Circle cx={42.5} cy={54.63} r={2} style={styles.cls5} />
  </Svg>
);
export default SvgComponent;

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  cls4: {
    fill: 'none',
    stroke: '#9c9fa0',
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
    strokeWidth: '2px',
  },
  cls5: {
    fill: '#c4c4c4',
  },
  cls6: {
    fill: '#e0e0e0',
  },
  cls7: {
    fill: ' #fff',
  },
});
