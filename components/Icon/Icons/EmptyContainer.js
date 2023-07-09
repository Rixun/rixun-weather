import * as React from 'react';
import Svg, { G, Path, Rect, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40" fill="none" {...props}>
    <Path
      stroke="#262626"
      d="M4 .5h72A3.5 3.5 0 0 1 79.5 4v32a3.5 3.5 0 0 1-3.5 3.5H4A3.5 3.5 0 0 1 .5 36V4A3.5 3.5 0 0 1 4 .5Z"
    />
  </Svg>
);
export default SvgComponent;
