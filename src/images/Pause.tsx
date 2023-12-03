import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export function Pause(props: SvgProps) {
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
      <Path d="M6 4h4v16H6zM14 4h4v16h-4z" />
    </Svg>
  );
}
