import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

function FormTab(props) {
  const {loginPress, signupPress, active} = props;
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={[styles.button, active && styles.activeBtn]}
        onPress={loginPress}>
        <Text style={[styles.btnTitle, active && styles.activeBtnTitle]}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, !active && styles.activeBtn]}
        onPress={signupPress}>
        <Text style={[styles.btnTitle, !active && styles.activeBtnTitle]}>
          Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
}

FormTab.defaultProps = {
  active: false,
};

export default FormTab;
