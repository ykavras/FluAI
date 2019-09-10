import React from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import styles from './styles';
import {CheckButtonsPhoto} from '../index';

function CameraPreviewImage(props) {
  const {image, no, yes, loader} = props;
  return (
    <View style={styles.previewImage}>
      {loader && (
        <ActivityIndicator style={styles.loader} color="black" size="large" />
      )}
      <CheckButtonsPhoto no={no} yes={yes} />
      <Image source={{uri: image}} style={styles.image} />
    </View>
  );
}

CameraPreviewImage.defaultProps = {
  loader: false,
};

export default CameraPreviewImage;
