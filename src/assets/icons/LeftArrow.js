import React from 'react';
import {Svg, Path} from 'react-native-svg';

export default function LeftArrow(props) {
  return (
    <Svg {...props} viewBox="0 0 16 16">
      <Path
        id="Path_10"
        d="M8,0,6.545,1.455l5.506,5.506H0V9.039H12.052L6.545,14.545,8,16l8-8Z"
        fill="#fff"
        transform="translate(16 16) rotate(180)"
        data-name="Path 10"
      />
    </Svg>
  );
}
