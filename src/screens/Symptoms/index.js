import React, {Component} from 'react';
import {View, StatusBar, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../assets/img/Logo.png';

class Symptoms extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar hidden />
        <LinearGradient
          colors={['#85007C', '#00AEC9']}
          style={styles.linearGradient}>
          <View style={styles.head}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.logoTitle}>FluAI</Text>
          </View>
          <View style={styles.context}>
            <Text style={styles.title}>What are your symptoms?</Text>
            <Text style={styles.textMedium}>Please select and rate your symptoms between 0 to 10</Text>
            <Text style={styles.text}>You can leave blank to symptoms that you dont have.</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} />
        </LinearGradient>
      </View>
    );
  }
}

export default Symptoms;
