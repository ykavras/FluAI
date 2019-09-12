import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

function HeaderBottomButton(props) {
  const {color1, color2, title, onPress} = props;
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[color1, color2]}
      style={styles.reButtonGradient}>
      <TouchableOpacity style={styles.reButton} onPress={onPress}>
        <Text style={styles.reButtonTitle}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

HeaderBottomButton.defaultProps = {
  color1: 'orange',
  color2: 'gray',
};

export default HeaderBottomButton;
