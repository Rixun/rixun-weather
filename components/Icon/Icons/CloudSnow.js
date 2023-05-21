import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, Path, Circle } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 64 64" {...props}>
    <Defs>
      <LinearGradient
        id="linear-gradient"
        x1={46.72}
        x2={25.63}
        y1={46.39}
        y2={19.08}
        gradientTransform="matrix(-1 0 0 1 65.97 0)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#f2f2f2" />
        <Stop offset={1} stopColor="#cfcfcf" />
      </LinearGradient>
      <LinearGradient
        id="linear-gradient-2"
        x1={-52.44}
        x2={-40.82}
        y1={96.91}
        y2={114.56}
        gradientTransform="matrix(0 -1 -1 0 149.19 -17.25)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.02} stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
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
    <Path
      d="M32.13 27.1v10.13M33.3 25.79l-1.17 1.47-1.18-1.47M30.95 38.55l1.18-1.47 1.17 1.47M36.51 29.63l-8.77 5.07M38.24 30l-1.86-.29.68-1.75M26.01 34.34l1.86.28-.68 1.76M36.51 34.7l-8.77-5.07M37.06 36.38l-.68-1.76 1.86-.28M27.19 27.96l.68 1.75-1.86.29"
      style={styles.cls3}
    />
    <Circle cx={26.5} cy={52.63} r={2} style={styles.cls4} />
    <Circle cx={36.5} cy={55.63} r={1.5} style={styles.cls5} />
    <Circle cx={18.5} cy={48.63} r={1.5} style={styles.cls5} />
    <Circle cx={32.5} cy={48.63} r={1} style={styles.cls6} />
    <Circle cx={46.5} cy={55.63} r={1} style={styles.cls6} />
    <Circle cx={17.5} cy={55.63} r={1} style={styles.cls6} />
    <Circle cx={42.5} cy={49.63} r={2} style={styles.cls4} />
  </Svg>
);
export default SvgComponent;

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  cls3: {
    fill: 'none',
    stroke: '#9c9fa0',
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
    strokeWidth: '2px',
  },
  cls4: {
    fill: '#c4c4c4',
  },
  cls5: {
    fill: '#e0e0e0',
  },
  cls6: {
    fill: ' #fff',
  },
});
