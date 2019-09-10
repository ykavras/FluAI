import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../assets/img/Logo.png';
import {SymptomsItem} from '../../components';

class Symptoms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          type: 'FEVER',
          value: 0,
          slider: true,
          step: 1,
          maximumValue: 10,
        },
        {
          type: 'SORE_THROAT',
          value: 0,
          slider: false,
          step: 1,
          maximumValue: 10,
        },
        {
          type: 'COUGH',
          value: 0,
          slider: true,
          step: 1,
          maximumValue: 10,
        },
        {
          type: 'MUSCLE_PAIN',
          value: 0,
          slider: false,
          step: 1,
          maximumValue: 10,
        },
        {
          type: 'RUNNY_NOSE',
          value: 0,
          slider: true,
          step: 1,
          maximumValue: 10,
        },
        {
          type: 'HEADACHE',
          value: 0,
          slider: false,
          step: 1,
          maximumValue: 10,
        },
        {
          type: 'NAUSEA_VOMIT',
          value: 0,
          slider: false,
          step: 1,
          maximumValue: 10,
        },
        {
          type: 'FATIGUE',
          value: 0,
          slider: true,
          step: 1,
          maximumValue: 10,
        },
        {
          type: 'SNEEZE',
          value: 0,
          slider: false,
          step: 1,
          maximumValue: 10,
        },
        {
          type: 'DURATION',
          value: 0,
          slider: true,
          step: 1,
          maximumValue: 10,
        },
      ],
    };
  }

  onChangeValue = (type, val) => {
    const {data} = this.state;
    const newData = data.map(el =>
      el.type === type ? {...el, value: val} : el,
    );
    this.setState({data: newData});
  };

  render() {
    const {data} = this.state;
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
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            ListHeaderComponent={
              <View style={styles.context}>
                <Text style={styles.title}>What are your symptoms?</Text>
                <Text style={[styles.text, styles.textMedium]}>
                  Please select and rate your symptoms between 0 to 10
                </Text>
                <Text style={styles.text}>
                  You can leave blank to symptoms that you dont have.
                </Text>
              </View>
            }
            ListFooterComponent={
              <View style={styles.buttons}>
                <TouchableOpacity style={[styles.button, styles.buttonReset]}>
                  <Text style={[styles.buttonTitle, styles.buttonTitleReset]}>
                    Reset
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonNext]}>
                  <Text style={[styles.buttonTitle, styles.buttonTitleNext]}>
                    Next
                  </Text>
                </TouchableOpacity>
              </View>
            }
            renderItem={({item, i}) => {
              return (
                <SymptomsItem
                  key={`item_${i}`}
                  type={item.type}
                  slider={item.slider}
                  step={item.step}
                  maximumValue={item.maximumValue}
                  onValueChange={val => this.onChangeValue(item.type, val)}
                  value={item.value}
                />
              );
            }}
          />
        </LinearGradient>
      </View>
    );
  }
}

export default Symptoms;
