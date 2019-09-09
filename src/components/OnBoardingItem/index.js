import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import imageOne from '../../assets/img/onBoarding/image-1.png';
import PatternIcon from '../../assets/icons/Pattern';

function OnBoardingItem(props) {
  const {color1, color2, image, title, text, onPress, buttonColor} = props;
  console.log(onPress);
  return (
    <View style={styles.wrapper}>
      <LinearGradient colors={[color1, color2]} style={styles.linearGradient}>
        <Image source={image} style={styles.image} />
        <PatternIcon style={styles.pattern} />
      </LinearGradient>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
        {onPress && (
          <TouchableOpacity
            onPress={onPress}
            style={[styles.button, {backgroundColor: buttonColor}]}>
            <Text style={styles.buttonTitle}>Get Your Photo</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

OnBoardingItem.defaultProps = {
  color1: '#F2871E',
  color2: '#E24526',
  image: imageOne,
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  buttonColor: '#E24526',
};

export default OnBoardingItem;
