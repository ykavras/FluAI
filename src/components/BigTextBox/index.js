import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

function BigTextBox(props) {
  const {style} = props;
  return (
    <View style={[styles.wrapper, style]}>
      <Text style={styles.title}>OUR AI SAYS</Text>
      <Text style={styles.text}>
        <Text style={[styles.text, styles.bold]}>Common cold</Text> is a
        condition in which the body regains itself just a few days.
      </Text>
      <Text style={[styles.text, styles.not, styles.mt]}>
        - Not neccesary to apply a hospital
      </Text>
      <Text style={[styles.text, styles.not]}>
        - Not neccesary to use antibiotics
      </Text>
      <Text style={[styles.text, styles.mb]}>for your situation</Text>
      <Text style={styles.text}>
        If there is no change or good improvement in your symptoms in 3-4 days,
        you can contact with your doctor.
      </Text>
    </View>
  );
}

BigTextBox.defaultProps = {};

export default BigTextBox;
