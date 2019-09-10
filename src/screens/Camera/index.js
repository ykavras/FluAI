import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import styles from './styles';
import {RNCamera} from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';
import {CameraButton, CameraHeader, CameraPreviewImage} from '../../components';

class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraType: 'back',
      mirrorMode: false,
      getPhoto: false,
      imageWrapper: false,
      image: undefined,
      imagePreview: undefined,
      loader: false,
    };
  }

  changeCameraType() {
    if (this.state.cameraType === 'back') {
      this.setState({
        cameraType: 'front',
        mirror: true,
      });
    } else {
      this.setState({
        cameraType: 'back',
        mirror: false,
      });
    }
  }

  getGallery = () => {
    this.setState({getPhoto: true, imageWrapper: true, loader: true});
    ImagePicker.launchImageLibrary(
      {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      },
      async response => {
        const imageURI = await response;
        response.didCancel &&
          this.setState({
            getPhoto: false,
            loader: false,
            imageWrapper: false,
            imagePreview: undefined,
          });
        imageURI &&
          this.setState({
            getPhoto: false,
            image: imageURI.data,
            imagePreview: imageURI.uri,
            loader: false,
          });
      },
    );
  };

  takePicture = async () => {
    this.setState({loader: true, imagePreview: undefined});
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      data &&
        this.setState({
          imageWrapper: true,
          image: data.base64,
          imagePreview: data.uri,
          loader: false,
        });
    }
  };

  cancelPhoto = () => {
    this.setState({
      getPhoto: false,
      imageWrapper: false,
      image: undefined,
      imagePreview: undefined,
      loader: false,
    });
  };

  postPhoto = async image => {
    const postImage = await image;
    console.log(postImage);
  };

  render() {
    const {
      cameraType,
      mirror,
      getPhoto,
      imageWrapper,
      image,
      imagePreview,
      loader,
    } = this.state;
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="light-content" />
        <CameraHeader />
        {imageWrapper && (
          <CameraPreviewImage
            image={imagePreview}
            loader={loader}
            no={() => this.cancelPhoto()}
            yes={() => this.postPhoto(image)}
          />
        )}
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={cameraType}
          mirrorImage={mirror}
          flashMode={RNCamera.Constants.FlashMode.auto}
          fixOrientation={true}
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
          <CameraButton
            onPress={() => this.getGallery()}
            type={getPhoto ? 'timer' : 'gallery'}
          />
          <CameraButton onPress={() => this.takePicture()} type="camera" />
          <CameraButton onPress={() => this.changeCameraType()} type="mirror" />
        </View>
      </View>
    );
  }
}

export default Camera;
