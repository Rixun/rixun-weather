import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, Path, Circle } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" {...props}>
    <Defs>
      <LinearGradient
        id="a"
        x1={342.72}
        x2={321.63}
        y1={46.39}
        y2={19.08}
        gradientTransform="matrix(-1 0 0 1 361.97 0)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#f2f2f2" />
        <Stop offset={1} stopColor="#cfcfcf" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={258.02}
        x2={269.63}
        y1={139.46}
        y2={157.11}
        gradientTransform="matrix(0 -1 -1 0 191.73 293.2)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.02} stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
    <Path
      d="M23.66 9.9a17.49 17.49 0 0 1 15.47 9.32A13.75 13.75 0 1 1 46 44.84l-22.39.06a17.5 17.5 0 0 1 0-35Z"
      style={{
        fill: 'url(#a)',
      }}
    />
    <Circle
      cx={46.05}
      cy={31.09}
      r={13.75}
      style={{
        fill: 'url(#b)',
      }}
      transform="rotate(-74.39 46.055 31.09)"
    />
    <Path
      d="M33.13 36.35 31 48.6h4.26l-2.13 9.05 10.12-12.78h-4.79l4.26-8.52h-9.59z"
      style={{
        fill: '#efcc00',
      }}
    />
    <Path
      d="M28.85 53.28a3.72 3.72 0 1 1-7.44 0c0-3.26 3-6.28 3.72-6.28s3.72 3 3.72 6.28Z"
      style={{
        fill: '#0baeff',
      }}
    />
  </Svg>
);
export default SvgComponent;
