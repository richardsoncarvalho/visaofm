import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

type NewsProps = SvgProps & {
  size: number;
  color: string;
};

export function News({color, size, ...rest}: NewsProps) {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      {...rest}>
      <Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
    </Svg>
  );
}
