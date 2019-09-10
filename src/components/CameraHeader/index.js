import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import LeftArrowIcon from '../../assets/icons/LeftArrow';
import LinearGradient from 'react-native-linear-gradient';

function CameraHeader(props) {
  const {} = props;
  return (
    <LinearGradient style={styles.cameraHead} colors={['#3848BE', '#70D2FD']}>
      <TouchableOpacity style={styles.cameraHeadBtn} y>
        <LeftArrowIcon style={styles.arrow} />
        <Text style={styles.cameraHeadTitle}>Camera</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

CameraHeader.defaultProps = {};

export default CameraHeader;
