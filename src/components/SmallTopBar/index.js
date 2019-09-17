import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {ProgressSmall} from '../index';
import Diagnose from '../../assets/icons/Diagnose';

function SmallTopBar(props) {
  const {onPress} = props;
  return (
    <View style={styles.body}>
      <LinearGradient style={styles.wrapper} colors={['#2B6B86', '#5B34E1']}>
        <ProgressSmall size={70} width={9} fill={80} text="Cold" />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Diagnose style={styles.icon} />
          <Text style={styles.buttonTitle}>My Diagnose</Text>
        </TouchableOpacity>
        <View style={styles.last}>
          <Text style={[styles.lastText, styles.lastBold]}>Last Analysis</Text>
          <Text style={styles.lastText}>Yesterday 15:53</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

SmallTopBar.defaultProps = {};

export default SmallTopBar;
