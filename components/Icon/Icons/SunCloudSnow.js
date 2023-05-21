import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, Circle, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 64 64" {...props}>
    <Defs>
      <LinearGradient
        id="linear-gradient"
        x1={-545.28}
        x2={-566.37}
        y1={52.39}
        y2={25.08}
        gradientTransform="matrix(-1 0 0 1 -526.2 0)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#f2f2f2" />
        <Stop offset={1} stopColor="#cfcfcf" />
      </LinearGradient>
      <LinearGradient
        id="linear-gradient-2"
        x1={-626.95}
        x2={-615.34}
        y1={-36.67}
        y2={-19.02}
        gradientTransform="matrix(0 -1 -1 0 15.44 -585.77)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.02} stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
    <Circle cx={39.8} cy={22} r={12.59} style={styles.cls1} />
    <Path
      d="M39.8 2v4.44M39.8 37.56V42M19.8 22h4.45M55.36 22h4.44M25.66 7.86 28.8 11M50.8 33l3.14 3.14M25.66 36.14 28.8 33M50.8 11l3.14-3.14"
      style={styles.cls2}
    />
    <Path
      d="M23.5 15.9A17.49 17.49 0 0 1 39 25.22a13.75 13.75 0 1 1 6.92 25.62l-22.42.06a17.5 17.5 0 0 1 0-35Z"
      style={{
        fill: 'url(#linear-gradient)',
      }}
    />
    <Circle
      cx={45.89}
      cy={37.09}
      r={13.75}
      style={{
        fill: 'url(#linear-gradient-2)',
      }}
      transform="rotate(-74.39 45.886 37.086)"
    />
    <Path
      d="M32.13 32.1v10.13M33.3 30.79l-1.17 1.47-1.18-1.47M30.95 43.55l1.18-1.47 1.17 1.47M36.51 34.63l-8.77 5.07M38.24 35l-1.86-.29.68-1.75M26.01 39.34l1.86.28-.68 1.76M36.51 39.7l-8.77-5.07M37.06 41.38l-.68-1.76 1.86-.28M27.19 32.96l.68 1.75-1.86.29"
      style={styles.cls5}
    />
    <Circle cx={26.5} cy={57.63} r={2} style={styles.cls6} />
    <Circle cx={36.5} cy={60.63} r={1.5} style={styles.cls7} />
    <Circle cx={18.5} cy={53.63} r={1.5} style={styles.cls7} />
    <Circle cx={32.5} cy={53.63} r={1} style={styles.cls8} />
    <Circle cx={46.5} cy={60.63} r={1} style={styles.cls8} />
    <Circle cx={17.5} cy={60.63} r={1} style={styles.cls8} />
    <Circle cx={42.5} cy={54.63} r={2} style={styles.cls6} />
  </Svg>
);
export default SvgComponent;
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  cls1: {
    fill: '#efcc00',
  },
  strokelevel: {
    fill: 'none',
    strokeLinecap: 'round',
    strokeMiterlimit: '10',
  },
  cls2: {
    stroke: '#efcc00',
    strokeWidth: '3px',
  },
  cls5: {
    stroke: '#9c9fa0',
    strokeWidth: '2px',
  },
  cls6: {
    fill: '#c4c4c4',
  },
  cls7: {
    fill: '#e0e0e0',
  },
  cls8: {
    fill: ' #fff',
  },
});
