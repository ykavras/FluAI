import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import Add from '../../assets/icons/Add';

function HealedButton(props) {
  const {onPress, title, style} = props;
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Add style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

HealedButton.defaultProps = {
  title: "I'm Healed",
};

export default HealedButton;
