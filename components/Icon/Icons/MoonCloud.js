import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, Path, Circle } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" {...props}>
    <Defs>
      <LinearGradient
        id="a"
        x1={46.72}
        x2={25.63}
        y1={58.39}
        y2={31.08}
        gradientTransform="matrix(-1 0 0 1 65.97 0)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#f2f2f2" />
        <Stop offset={1} stopColor="#cfcfcf" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={4.06}
        x2={15.68}
        y1={116.66}
        y2={134.3}
        gradientTransform="matrix(0 -1 -1 0 168.93 51.25)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.02} stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
    <Path
      d="M50 26.71A13.88 13.88 0 0 1 37.86 8.77a.6.6 0 0 0-.86-.69A13.88 13.88 0 1 0 55.92 27a.6.6 0 0 0-.69-.89 13.91 13.91 0 0 1-5.23.6Z"
      style={{
        fill: '#efcc00',
      }}
    />
    <Path
      d="M23.66 21.9a17.49 17.49 0 0 1 15.47 9.32A13.75 13.75 0 1 1 46 56.84l-22.39.06a17.5 17.5 0 0 1 0-35Z"
      style={{
        fill: 'url(#a)',
      }}
    />
    <Circle
      cx={46.05}
      cy={43.09}
      r={13.75}
      style={{
        fill: 'url(#b)',
      }}
      transform="rotate(-74.39 46.053 43.09)"
    />
  </Svg>
);
export default SvgComponent;
