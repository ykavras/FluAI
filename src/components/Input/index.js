import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import EmailIcon from '../../assets/icons/Email';
import PasswordIcon from '../../assets/icons/Password';

const types = {
  email: <EmailIcon style={styles.icon} />,
  password: <PasswordIcon style={styles.icon} />,
};

function Input(props) {
  const {placeholder, type, onChangeText, style} = props;
  return (
    <View style={[styles.wrapper, style]}>
      {type && types[type]}
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'rgba(26,26,26,0.4)'}
      />
    </View>
  );
}

Input.defaultProps = {
  placeholder: 'Placeholder',
  type: undefined,
};

export default Input;
