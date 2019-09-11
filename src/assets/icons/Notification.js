import React from 'react';
import {Svg, G, Path} from 'react-native-svg';

export default function Notification(props) {
  return (
    <Svg
      {...props}
      version="1.1"
      viewBox="0 0 510 510"
      x="0px"
      y="0px"
      xmlSpace="preserve">
      <G>
        <G>
          <G id="notifications">
            <Path
              className="active-path"
              d="M255,510c28.05,0,51-22.95,51-51H204C204,487.05,226.95,510,255,510z M420.75,357V216.75    c0-79.05-53.55-142.8-127.5-160.65V38.25C293.25,17.85,275.4,0,255,0c-20.4,0-38.25,17.85-38.25,38.25V56.1    c-73.95,17.85-127.5,81.6-127.5,160.65V357l-51,51v25.5h433.5V408L420.75,357z"
              data-original="#000000"
              data-old_color="#000000"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}
