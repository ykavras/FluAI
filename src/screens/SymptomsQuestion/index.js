import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../assets/img/Logo.png';

class SymptomsQuestion extends Component {
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>
              Do you have any of listed severe symptoms ?
            </Text>
            <Text style={styles.text}>
              - Difficulty breathing or shortness of breath
            </Text>
            <Text style={styles.text}>
              - Persistent pain or pressure in the chest
            </Text>
            <Text style={styles.text}>- Persistent dizziness, confusion</Text>
            <Text style={styles.text}>- Seizures</Text>
            <Text style={styles.text}>- Not urinating</Text>
            <Text style={styles.text}>- Severe muscle pain</Text>
            <Text style={styles.text}>- Severe weakness or unsteadiness</Text>
            <Text style={styles.text}>- Fever or cough that worsen</Text>
            <Text style={styles.text}>
              - Worsening of chronic medical conditions
            </Text>
            <View style={styles.buttons}>
              <TouchableOpacity style={[styles.button, styles.buttonNo]}>
                <Text style={[styles.buttonTitle, styles.buttonTitleNo]}>
                  Yes, I have
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonYes]}>
                <Text style={[styles.buttonTitle, styles.buttonTitleYes]}>
                  No,I don't have
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}

export default SymptomsQuestion;
