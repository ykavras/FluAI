import React from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../assets/img/Logo.png';
import ProfileImage from '../ProfileImage';
import Progress from '../Progress';
import ShareIcon from '../../assets/icons/Share';
import HeaderBottomRight from '../HeaderBottomRight';
import HeaderBottomLeft from '../HeaderBottomLeft';

function Header(props) {
  const {title, bottom} = props;
  return (
    <LinearGradient colors={['#4A008D', '#2F6B81']} style={styles.wrapper}>
      <StatusBar barStyle="light-content" />
      <View style={styles.top}>
        <View style={styles.logo}>
          <Image source={Logo} style={styles.logoIcon} />
          <Text style={styles.logoTitle}>FluAI</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <ProfileImage count={8} />
      </View>
      {bottom && (
        <View style={styles.bottom}>
          <HeaderBottomLeft />
          <HeaderBottomRight />
        </View>
      )}
    </LinearGradient>
  );
}

Header.defaultProps = {
  title: 'SCREEN TITLE',
  bottom: true,
};

export default Header;
