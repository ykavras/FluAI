import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Header} from '../../components';

class Main extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Header
          fill={38}
          progressText="Bacterial Pharyngitis"
          text="Your recovery will takes"
          textBold="3-4 days"
          textSmall="(approx.)"
          share={() => alert('SHARE')}
          onPress1={() => alert('REPORT')}
          onPress2={() => alert('RE-ANALYZE')}
        />
      </View>
    );
  }
}

export default Main;
