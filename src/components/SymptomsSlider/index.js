import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Slider from 'react-native-slider';

function SymptomsSlider(props) {
  const {value, step, maximumValue, onValueChange} = props;
  return (
    <View style={styles.wrapper}>
      <Slider
        value={value}
        onValueChange={onValueChange}
        style={styles.slider}
        trackStyle={styles.trackStyle}
        thumbStyle={styles.thumbStyle}
        step={step}
        maximumValue={maximumValue}
        minimumTrackTintColor="#5F5BDB"
        thumbTouchSize={{width: 30, height: 30}}
      />
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

SymptomsSlider.defaultProps = {};

export default SymptomsSlider;
