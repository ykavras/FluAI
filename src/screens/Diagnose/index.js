import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import styles from './styles';
import {Header, HeaderBottomButton, Progress} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import ClockIcon from '../../assets/icons/Clock';
import Treatment from '../../assets/icons/Treatment';
import ShareIcon from '../../assets/icons/Share';

const width = Dimensions.get('window').width;

let size = 170;
let borderWidth = 24;

if (width < 375) {
  size = 125;
  borderWidth = 14;
}

class Diagnose extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Header title="MY DIAGNOSE" />
        <LinearGradient
          style={styles.wrapperTop}
          colors={['#4F0055', '#2F6B81']}>
          <Image
            source={require('../../assets/img/background.png')}
            style={styles.background}
          />
          <View style={styles.top}>
            <View style={styles.lastAnalysis}>
              <Text style={styles.lastAnalysisText}>Last Analysis</Text>
              <Text style={styles.lastAnalysisDate}>Yesterday 15:53</Text>
            </View>
            <HeaderBottomButton
              title="RE-ANALYZE"
              color1="#0FAC92"
              color2="#0FB731"
            />
          </View>
          <View style={styles.center}>
            <Progress
              size={size}
              width={borderWidth}
              text="Bacterial Pharyngitis"
            />
            <TouchableOpacity
              style={styles.shareButton}
              onPress={() => alert('SHARE')}>
              <ShareIcon style={styles.shareIcon} />
              <Text style={styles.shareButtonTitle}>Share</Text>
            </TouchableOpacity>
            <View style={styles.centerInfo}>
              <Text style={styles.infoText}>
                <Text style={styles.infoTextBold}>%14 </Text>Viral Pharyngitis
              </Text>
              <Text style={styles.infoText}>
                <Text style={styles.infoTextBold}>%6 </Text>Common Cold
              </Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.textBox}>
              <ClockIcon fill="#2D2D2D" style={styles.clockIcon} />
              <View style={styles.textBoxContext}>
                <Text style={styles.textBoxText}>Your recovery will takes</Text>
                <Text style={styles.textBoxSmallText}>
                  <Text style={styles.textBoxBold}>3-4 days</Text> (approx.)
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Treatment style={styles.buttonIcon} />
              <Text style={styles.buttonTitle}>My Treatment</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default Diagnose;