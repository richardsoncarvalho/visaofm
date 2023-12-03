import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export function Facebook(props: SvgProps) {
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
      <Path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </Svg>
  );
}
