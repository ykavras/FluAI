import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import styles from './styles';
import {OnBoardingItem} from '../../components/';

class OnBoarding extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="light-content" />
        <OnBoardingItem />
      </View>
    );
  }
}

export default OnBoarding;
