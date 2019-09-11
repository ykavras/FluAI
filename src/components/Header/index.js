import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../assets/img/Logo.png';
import ProfileImage from '../ProfileImage';

function Header(props) {
  const {title} = props;
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={['#1174AE', '#662F81']} style={styles.top}>
        <View style={styles.logo}>
          <Image source={Logo} style={styles.logoIcon} />
          <Text style={styles.logoTitle}>FluAI</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <ProfileImage count={8} />
      </LinearGradient>
    </View>
  );
}

Header.defaultProps = {
  title: 'SCREEN TITLE',
};

export default Header;
