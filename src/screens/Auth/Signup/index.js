import React, {Component} from 'react';
import {View, StatusBar, Image, Text, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import homeStyles from '../styles';
import styles from './styles';
import Logo from '../../../assets/img/Logo.png';
import {FormTab, Input, OtherButtons, FormPrivacy} from '../../../components/';

class Signup extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={homeStyles.wrapper}>
        <StatusBar hidden />
        <View style={homeStyles.logoWrapper}>
          <Image source={Logo} style={homeStyles.logoSmall} />
          <Text style={homeStyles.logoTitle}>FluAI</Text>
        </View>
        <Image source={Logo} style={homeStyles.logo} />
        <View style={homeStyles.circle} />
        <KeyboardAwareScrollView
          style={homeStyles.formWrapper}
          showsVerticalScrollIndicator={false}>
          <View style={[homeStyles.form, styles.customForm]}>
            <FormTab
              onPressLogin={() => navigate('Login')}
              onPressSignup={() => navigate('Signup')}
            />
            <View style={styles.inputs}>
              <Input placeholder="First Name" style={styles.input} />
              <Input placeholder="Last Name" style={styles.input} />
            </View>
            <Input type="email" placeholder="Email Address" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
            <OtherButtons type="facebook" />
            <OtherButtons type="google" />
            <FormPrivacy />
            <TouchableOpacity
              style={[homeStyles.formButton, styles.formBtnCustom]}>
              <Text style={homeStyles.formButtonTitle}>SIGNUP</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default Signup;
