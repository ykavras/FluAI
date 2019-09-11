import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import DiagnoseIcon from '../../assets/icons/Diagnose';
import TreatmentIcon from '../../assets/icons/Treatment';
import TrackIcon from '../../assets/icons/Track';

const types = {
  Diagnose: <DiagnoseIcon style={styles.icon} />,
  Treatment: <TreatmentIcon style={styles.icon} />,
  Track: <TrackIcon style={styles.icon} />,
};

function ReportBox(props) {
  const {type, title, text, onPress} = props;
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      {types[type]}
      <View style={styles.context}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

ReportBox.defaultProps = {
  type: 'Diagnose',
  title: 'Title',
  text: 'Description',
};

export default ReportBox;
