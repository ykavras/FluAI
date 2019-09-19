import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Slider from 'react-native-slider';

function SymptomsSlider(props) {
  const {
    value,
    step,
    maximumValue,
    onValueChange,
    trackColor,
    thumbColor,
    tintColor,
  } = props;
  return (
    <View style={styles.wrapper}>
      <Slider
        value={value}
        onValueChange={onValueChange}
        style={styles.slider}
        trackStyle={[styles.trackStyle, {backgroundColor: trackColor}]}
        thumbStyle={[styles.thumbStyle, {backgroundColor: thumbColor}]}
        minimumTrackTintColor={tintColor}
        step={step}
        maximumValue={maximumValue}
        thumbTouchSize={{width: 30, height: 30}}
      />
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

SymptomsSlider.defaultProps = {
  trackColor: '#EFEFEF',
  thumbColor: '#5F5BDB',
  tintColor: '#5F5BDB',
};

export default SymptomsSlider;
