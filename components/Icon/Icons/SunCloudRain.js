import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, Circle, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 64 64" {...props}>
    <Defs>
      <LinearGradient
        id="linear-gradient"
        x1={-693.28}
        x2={-714.37}
        y1={52.39}
        y2={25.08}
        gradientTransform="matrix(-1 0 0 1 -674.2 0)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#f2f2f2" />
        <Stop offset={1} stopColor="#cfcfcf" />
      </LinearGradient>
      <LinearGradient
        id="linear-gradient-2"
        x1={-732.41}
        x2={-720.79}
        y1={-51.12}
        y2={-33.47}
        gradientTransform="matrix(0 -1 -1 0 .99 -691.22)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.02} stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
    <Circle
      cx={39.8}
      cy={22}
      r={12.59}
      style={{
        fill: '#efcc00',
      }}
    />
    <Path
      d="M39.8 2v4.44M39.8 37.56V42M19.8 22h4.45M55.36 22h4.44M25.66 7.86 28.8 11M50.8 33l3.14 3.14M25.66 36.14 28.8 33M50.8 11l3.14-3.14"
      style={[styles.cls2, styles.strokelevel]}
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
    <Path d="M32.5 55.5v7M26.5 53.5v7M38.5 53.5v7" style={[styles.cls5, styles.strokelevel]} />
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
  cls2: { stroke: '#efcc00' },
  cls5: {
    stroke: '#0baeff',
  },
});
