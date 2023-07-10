import * as React from 'react';
import Svg, { G, Path, Rect, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40" fill="none" {...props}>
    <Path
      stroke="#262626"
      d="M4 .5h72A3.5 3.5 0 0 1 79.5 4v32a3.5 3.5 0 0 1-3.5 3.5H4A3.5 3.5 0 0 1 .5 36V4A3.5 3.5 0 0 1 4 .5Z"
    />
    <Rect width={10} height={20} x={2} y={10} style={styles.fill} rx={2} />
    <Rect width={10} height={20} x={13} y={10} style={styles.fill} rx={2} />
    <Rect width={10} height={20} x={24} y={10} style={styles.fill} rx={2} />
    <Rect width={10} height={20} x={35} y={10} style={styles.fill} rx={2} />
    <Rect width={10} height={20} x={57} y={10} style={styles.fill} rx={2} />
    <Rect width={10} height={20} x={68} y={10} style={styles.fill} rx={2} />
    <Rect width={10} height={20} x={46} y={10} style={styles.fill} rx={2} />
  </Svg>
);
export default SvgComponent;
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  fill: {
    fill: '#3D3D3D',
  },
});
