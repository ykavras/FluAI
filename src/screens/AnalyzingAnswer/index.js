import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, StatusBar} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import PatternIcon from '../../assets/icons/Pattern';
import Throat from '../../assets/img/throat.png';
import CancelIcon from '../../assets/img/cancel.png';
import SuccessIcon from '../../assets/img/success.png';

class AnalyzingAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
    };
  }

  render() {
    const {success} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="light-content" />
        <LinearGradient
          colors={success ? ['#30FF59', '#DEFF90'] : ['#FF3030', '#FF90D3']}
          style={styles.linearGradient}>
          <Image source={Throat} style={styles.image} />
          <PatternIcon style={styles.pattern} />
        </LinearGradient>
        <View style={styles.content}>
          <Image
            source={success ? SuccessIcon : CancelIcon}
            style={styles.icon}
          />
          <Text style={[styles.title, success && styles.titleSuccess]}>
            {success ? 'Successful' : 'Please take photo again !'}
          </Text>
          <Text style={styles.text}>
            {success
              ? 'Our AI has few question \n for your final result'
              : 'Our AI hopes better photo from you.\n Please follow the guide for better photo'}
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTitle}>
              {success ? 'Next' : 'Take one more'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default AnalyzingAnswer;
