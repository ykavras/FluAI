import React, {Component} from 'react';
import {Dimensions, View} from 'react-native';
import styles from './styles';
import {Header} from '../../components';

const width = Dimensions.get('window').width;

let size = 150;
let progressWidth = 22;

if (width < 375) {
  size = 125;
  progressWidth = 10;
}

class Main extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Header
          bottom
          size={size}
          width={progressWidth}
          fill={38}
          progressText="Bacterial Pharyngitis"
          text="Your recovery will takes"
          textBold="3-4 days"
          textSmall="(approx.)"
        />
      </View>
    );
  }
}

export default Main;
