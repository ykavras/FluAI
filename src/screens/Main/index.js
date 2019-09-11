import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import styles from './styles';
import {Header} from '../../components';

class Main extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Header />
      </View>
    );
  }
}

export default Main;
