import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import LightningIcon from '../../assets/img/lightning.png';
import RecoveryIcon from '../../assets/img/recovery.png';
import InfoIcon from '../../assets/img/info.png';
import LinearGradient from 'react-native-linear-gradient';
import {HealedButton} from '../index';

function AnalysisToday(props) {
  const {todayPress, healedPress} = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <Text style={styles.title}>ANALYSIS today</Text>
        <Text style={styles.smallText}>Last Rate : Today 14:20</Text>
      </View>
      <View style={styles.context}>
        <View style={styles.iconTextWrapper}>
          <Image source={LightningIcon} style={styles.icon} />
          <Text style={styles.iconTitle}>
            <Text style={styles.bold}>Current FluRate® :</Text> 60
          </Text>
        </View>
        <View style={styles.iconTextWrapper}>
          <Image source={RecoveryIcon} style={styles.icon} />
          <Text style={styles.iconTitle}>
            <Text style={styles.bold}>Remaining to recovery :</Text> 3 days
          </Text>
        </View>
      </View>
      <View style={styles.fluRate}>
        <Image source={InfoIcon} style={styles.icon} />
        <Text style={styles.fluRateText}>What is FluRate® ?</Text>
      </View>
      <View style={styles.buttons}>
        <LinearGradient
          colors={['#017BA7', '#6A15CC']}
          style={styles.gradientBtn}>
          <TouchableOpacity style={styles.gradientBtnIn} onPress={todayPress}>
            <Text style={styles.gradientBtnTitle}>ANALYSIS TODAY</Text>
          </TouchableOpacity>
        </LinearGradient>
        <HealedButton onPress={healedPress} />
      </View>
    </View>
  );
}

AnalysisToday.defaultProps = {};

export default AnalysisToday;
