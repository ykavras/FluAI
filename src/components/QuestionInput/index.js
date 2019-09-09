import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';

function QuestionInput(props) {
  const {placeholder, onValueChange, items} = props;
  return (
    <View style={styles.wrapper}>
      <RNPickerSelect
        onValueChange={onValueChange}
        items={items}
        placeholder={{label: placeholder, value: null}}
        useNativeAndroidPickerStyle={false}
        style={{...styles}}
      />
    </View>
  );
}

QuestionInput.defaultProps = {
  placeholder: 'placeholder',
};

export default QuestionInput;
