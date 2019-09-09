import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

function FormTab(props) {
  const {onPressLogin, onPressSignup, active, style} = props;
  return (
    <View style={[styles.wrapper, style]}>
      <TouchableOpacity
        style={[styles.button, active && styles.activeBtn]}
        onPress={onPressLogin}>
        <Text style={[styles.btnTitle, active && styles.activeBtnTitle]}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, !active && styles.activeBtn]}
        onPress={onPressSignup}>
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
