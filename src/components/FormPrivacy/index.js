import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

function FormPrivacy(props) {
  const {onPress} = props;
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Text style={styles.text}>
        By pressing “submit” you agree to our{' '}
        <Text style={styles.yellowTitle}>terms & conditions.</Text>
        The advices in this application is purely for advice, not a definitive
        diagnosis and treatment.
      </Text>
    </TouchableOpacity>
  );
}

FormPrivacy.defaultProps = {};

export default FormPrivacy;
