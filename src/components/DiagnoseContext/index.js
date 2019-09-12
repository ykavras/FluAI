import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

function DiagnoseContext(props) {
  const {title, text} = props;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

DiagnoseContext.defaultProps = {
  title: 'Title',
  text: 'Description',
};

export default DiagnoseContext;
