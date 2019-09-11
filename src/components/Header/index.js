import React from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../assets/img/Logo.png';
import ProfileImage from '../ProfileImage';
import HeaderBottomRight from '../HeaderBottomRight';
import HeaderBottomLeft from '../HeaderBottomLeft';

function Header(props) {
  const {
    color1,
    color2,
    title,
    bottom,
    size,
    width,
    fill,
    progressText,
    share,
    text,
    textBold,
    textSmall,
    onPress1,
    onPress2,
  } = props;
  return (
    <LinearGradient colors={[color1, color2]} style={styles.wrapper}>
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
          <HeaderBottomLeft
            size={size}
            width={width}
            fill={fill}
            text={progressText}
            share={share}
          />
          <HeaderBottomRight
            onPress1={onPress1}
            onPress2={onPress2}
            text={text}
            textBold={textBold}
            textSmall={textSmall}
          />
        </View>
      )}
    </LinearGradient>
  );
}

Header.defaultProps = {
  color1: '#4A008D',
  color2: '#2F6B81',
  title: 'Current Screen Title',
  bottom: false,
  size: 150,
  width: 24,
  fill: 80,
  progressText: 'Text',
  text: 'Text',
  textBold: 'Bold Text',
  textSmall: 'Small Text',
};

export default Header;
