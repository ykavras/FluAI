import React, {Component} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import homeStyles from '../styles';
import Logo from '../../../assets/img/Logo.png';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DoctorIcon from '../../../assets/img/Doctor.png';
import {QuestionInput} from '../../../components';
class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {label: 'Football', value: 'football'},
        {label: 'Baseball', value: 'baseball'},
        {label: 'Hockey', value: 'hockey'},
      ],
    };
  }

  render() {
    const {items} = this.state;
    return (
      <View style={homeStyles.wrapper}>
        <StatusBar hidden />
        <View style={homeStyles.logoWrapper}>
          <Image source={Logo} style={homeStyles.logoSmall} />
          <Text style={homeStyles.logoTitle}>FluAI</Text>
        </View>
        <Image source={Logo} style={styles.logo} />
        <KeyboardAwareScrollView
          style={[homeStyles.formWrapper, styles.keyboardWrapper]}
          showsVerticalScrollIndicator={false}>
          <Image source={DoctorIcon} style={styles.doctor} />
          <Text style={styles.doctorTitle}>Almost ready to start...</Text>
          <QuestionInput
            placeholder="Sex"
            items={items}
            onValueChange={value => console.log(value)}
          />
          <QuestionInput
            placeholder="Sex"
            items={items}
            onValueChange={value => console.log(value)}
          />
          <QuestionInput
            placeholder="Pregnancy (if female selected)"
            items={items}
            onValueChange={value => console.log(value)}
          />
          <QuestionInput
            placeholder="Do you have any of these diseases ?"
            items={items}
            onValueChange={value => console.log(value)}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default Questions;
