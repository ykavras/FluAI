import React, {Component} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import homeStyles from '../styles';
import Logo from '../../../assets/img/Logo.png';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DoctorIcon from '../../../assets/img/Doctor.png';
class Questions extends Component {
  render() {
    return (
      <View style={homeStyles.wrapper}>
        <StatusBar hidden />
        <View style={homeStyles.logoWrapper}>
          <Image source={Logo} style={homeStyles.logoSmall} />
          <Text style={homeStyles.logoTitle}>FluAI</Text>
        </View>
        <Image source={Logo} style={styles.logo} />
        <KeyboardAwareScrollView
          style={homeStyles.formWrapper}
          showsVerticalScrollIndicator={false}>
          <Image source={DoctorIcon} style={styles.doctor} />
          <Text style={styles.doctorTitle}>Almost ready to start...</Text>

        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default Questions;
