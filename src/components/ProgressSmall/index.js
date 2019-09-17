import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import AnimatedCircularProgress from 'react-native-conical-gradient-progress';

function ProgressSmall(props) {
  const {size, width, fill, text} = props;
  return (
    <AnimatedCircularProgress
      size={size}
      width={width}
      fill={fill}
      prefill={0}
      beginColor="#FF6600"
      endColor="#15E346"
      segments={16}
      backgroundColor="rgba(169,169,169,0.3)"
      linecap="round"
      style={[styles.progressWrapper, {width: size, height: size}]}>
      {count => (
        <View
          style={[
            styles.progressWrapperTitle,
            {
              width: size - width - 12,
              height: size - width - 12,
              borderRadius: size / 2,
            },
          ]}>
          <Text style={styles.progressCount}> {count.toFixed(0)}% </Text>
          <Text style={styles.progressText}>{text}</Text>
        </View>
      )}
    </AnimatedCircularProgress>
  );
}

ProgressSmall.defaultProps = {
  size: 150,
  width: 24,
  fill: 80,
  text: 'Text',
};

export default ProgressSmall;
