import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';

type RadioProps = SvgProps & {
  size: number;
  color: string;
};

export function Radio({color, size, ...rest}: RadioProps) {
  return (
    <Svg
      width={size || 24}
      height={size || 24}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...rest}>
      <Circle cx={12} cy={12} r={2} />
      <Path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
    </Svg>
  );
}
