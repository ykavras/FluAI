import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import FacebookIcon from '../../assets/icons/Facebook';
import GoogleIcon from '../../assets/icons/Google';

const types = {
  facebook: {
    icon: <FacebookIcon style={styles.icon} />,
    text: <Text style={styles.title}>Sign in with Facebook</Text>,
  },
  google: {
    icon: <GoogleIcon style={styles.icon} />,
    text: (
      <Text style={[styles.title, styles.googleTitle]}>
        Sign in with Google
      </Text>
    ),
  },
};

function OtherButtons(props) {
  const {type, onPress} = props;
  return (
    <TouchableOpacity
      style={[styles.wrapper, type === 'facebook' && styles.facebook]}
      onPress={onPress}>
      {types[type].icon}
      {types[type].text}
    </TouchableOpacity>
  );
}

OtherButtons.defaultProps = {};

export default OtherButtons;
