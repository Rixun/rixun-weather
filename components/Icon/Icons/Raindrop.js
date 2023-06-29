import * as React from 'react';
import Svg, { Defs, LinearGradient, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const SvgComponent = ({ rainChanceText, ...extraProps }) => {
  console.log(rainChanceText);
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_3"
      data-name="Layer 3"
      viewBox="0 0 32 32"
      {...extraProps}
    >
      <Defs>
        <LinearGradient
          id={`fill-rain-drop-${rainChanceText}`}
          x1="0"
          x2="0"
          y1="1"
          y2="0"
        >
          <stop offset={rainChanceText} stopColor="#0baeff" />
          <stop offset={rainChanceText} stopColor="transparent" />
        </LinearGradient>
      </Defs>
      <Path
        d="M24 18.75a8 8 0 0 1-16 0c0-4.42 8-13 8-13s8 8.58 8 13Z"
        style={[styles.cls1, styles.fillRain(rainChanceText)]}
      />
      <Path d="M24 18.75c0 4.42-3.58 7-8 7s-8-2.58-8-7" style={styles.cls1} />
    </Svg>
  );
};
export default SvgComponent;
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  cls1: {
    fill: 'none',
    stroke: '#0baeff',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
  fillRain: (rainChanceText) => ({
    fill: `url(#fill-rain-drop-${rainChanceText})`,
  }),
});
