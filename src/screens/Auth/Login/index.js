import React, {Component} from 'react';
import {View, StatusBar, Image, Text} from 'react-native';
import homeStyles from '../styles';
import Logo from '../../../assets/img/Logo.png';

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
          <View style={homeStyles.form}></View>
        </View>
      </View>
    );
  }
}

export default Login;
