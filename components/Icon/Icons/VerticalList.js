import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40" fill="none" {...props}>
    <Path
      stroke="#262626"
      d="M4 .5h72A3.5 3.5 0 0 1 79.5 4v32a3.5 3.5 0 0 1-3.5 3.5H4A3.5 3.5 0 0 1 .5 36V4A3.5 3.5 0 0 1 4 .5Z"
    />
    <Rect width={76} height={34} x={2} y={3} fill="#262626" rx={2} />
    <Path
      stroke="#4D4D4D"
      strokeLinecap="round"
      strokeWidth={2}
      d="M5 8h70M5 14h70M5 20h70M5 26h70M5 32h70"
    />
  </Svg>
);
export default SvgComponent;
