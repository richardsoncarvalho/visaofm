import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export function Play(props: SvgProps) {
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
      <Path d="m5 3 14 9-14 9V3z" />
    </Svg>
  );
}
