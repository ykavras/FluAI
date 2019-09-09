import React, {Component} from 'react';
import {View, StatusBar, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {RNCamera} from 'react-native-camera';

import LeftArrowIcon from '../../assets/icons/LeftArrow';
import LinearGradient from 'react-native-linear-gradient';
import {CameraButton} from '../../components';

class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mirrorMode: false,
      flash: false,
    };
  }
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  changeCameraFlash() {
    const {flash} = this.state;
    this.setState({flash: !flash});
  }
  changeCameraType() {
    const {mirrorMode} = this.state;
    this.setState({mirrorMode: !mirrorMode});
  }

  render() {
    const {mirrorMode, flash} = this.state;
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="light-content" />
        <LinearGradient
          style={styles.cameraHead}
          colors={['#3848BE', '#70D2FD']}>
          <TouchableOpacity style={styles.cameraHeadBtn} y>
            <LeftArrowIcon style={styles.arrow} />
            <Text style={styles.cameraHeadTitle}>Camera</Text>
          </TouchableOpacity>
        </LinearGradient>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={
            flash
              ? RNCamera.Constants.FlashMode.on
              : RNCamera.Constants.FlashMode.off
          }
          mirrorImage={mirrorMode}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={styles.cameraFoot}>
          <CameraButton onPress={() => this.changeCameraFlash()} type="flash" />
          <CameraButton onPress={() => this.takePicture()} type="camera" />
          <CameraButton onPress={() => this.changeCameraType()} type="mirror" />
        </View>
      </View>
    );
  }
}

export default Camera;
