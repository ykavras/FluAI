import React, {Component} from 'react';
import {View, StatusBar, Image, Text} from 'react-native';
import homeStyles from '../styles';
import styles from './styles';
import Logo from '../../../assets/img/Logo.png';
import {FormTab, Input, OtherButtons, FormPrivacy} from '../../../components/';

class Login extends Component {
  render() {
    return (
      <View style={homeStyles.wrapper}>
        <StatusBar hidden />
        <View style={homeStyles.logoWrapper}>
          <Image source={Logo} style={homeStyles.logoSmall} />
          <Text style={homeStyles.logoTitle}>FluAI</Text>
        </View>
        <Image source={Logo} style={homeStyles.logo} />
        <View style={homeStyles.circle} />
        <View style={homeStyles.formWrapper}>
          <View style={homeStyles.form}>
            <FormTab />
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
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
