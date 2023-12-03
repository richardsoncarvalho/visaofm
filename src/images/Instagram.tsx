import * as React from 'react';
import Svg, {SvgProps, Path, Rect} from 'react-native-svg';

export function Instagram(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}>
      <Rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
      <Path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
    </Svg>
  );
}
