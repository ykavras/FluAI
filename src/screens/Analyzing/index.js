import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import PatternIcon from '../../assets/icons/Pattern';
import image from '../../assets/img/analyzing-loading.png';
import imageWave from '../../assets/img/wave.png';

class Analyzing extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.wrapper}>
        <LinearGradient
          colors={['#306EFF', '#90FFE9']}
          style={styles.linearGradient}>
          <Image source={image} style={styles.image} />
          <PatternIcon style={styles.pattern} />
        </LinearGradient>
        <View style={styles.content}>
          <Text style={styles.title}>Analyzing...</Text>
          <Text style={styles.text}>It may takes few seconds, be patient.</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTitle}>Next</Text>
          </TouchableOpacity>
          <Image source={imageWave} style={styles.wave}/>
        </View>
      </View>
    );
  }
}

export default Analyzing;
