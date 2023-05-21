import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" {...props}>
    <Path
      d="M44.54 41.47a23 23 0 0 1-20.05-29.74A1 1 0 0 0 23 10.59 23 23 0 1 0 54.41 42a1 1 0 0 0-1.14-1.47 23.06 23.06 0 0 1-8.73.94Z"
      style={{
        fill: '#efcc00',
      }}
    />
  </Svg>
);
export default SvgComponent;
