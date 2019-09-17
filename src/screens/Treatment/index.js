import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Header, SmallTopBar} from '../../components';

class Treatment extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Header title="MY TREATMENT" color1="#7C009B" color2="#2F6B81" />
        <SmallTopBar />
      </View>
    );
  }
}

export default Treatment;
