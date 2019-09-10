import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import NoIcon from '../../assets/icons/No';
import YesIcon from '../../assets/icons/Yes';

function CheckButtonsPhoto(props) {
  const {no, yes} = props;
  return (
    <View style={styles.buttons}>
      <TouchableOpacity style={[styles.button, styles.no]} onPress={no}>
        <NoIcon style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.yes]} onPress={yes}>
        <YesIcon style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

CheckButtonsPhoto.defaultProps = {};

export default CheckButtonsPhoto;
