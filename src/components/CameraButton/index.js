import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';

import CameraIcon from '../../assets/icons/Camera';
import TurnIcon from '../../assets/icons/Turn';
import FlashIcon from '../../assets/icons/Bulb';

const types = {
  flash: <FlashIcon style={styles.cameraIcon} />,
  camera: <CameraIcon style={styles.cameraIcon} />,
  mirror: <TurnIcon style={styles.cameraIcon} />,
};

function CameraButton(props) {
  const {type, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.cameraBtn, type !== 'camera' && styles.turnBtn]}>
      {types[type]}
    </TouchableOpacity>
  );
}

CameraButton.defaultProps = {};

export default CameraButton;
