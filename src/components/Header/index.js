import React from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../assets/img/Logo.png';
const imageURL =
  'https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60';

function Header(props) {
  const {} = props;
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={['#1174AE', '#662F81']} style={styles.top}>
        <View style={styles.logo}>
          <Image source={Logo} style={styles.logoIcon} />
          <Text style={styles.logoTitle}>FluAI</Text>
        </View>
        <Text style={styles.title}>MY DIAGNOSE</Text>
        <TouchableOpacity style={styles.profiles}>
          <View style={styles.notification}>
            <Text style={styles.notificationNumber}>8</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image source={{uri: imageURL}} style={styles.image} />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

Header.defaultProps = {};

export default Header;
