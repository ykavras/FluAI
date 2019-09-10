import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {SymptomsSlider} from '../index';

const types = {
  FEVER: {
    title: 'FEVER',
    image: require('../../assets/img/symptoms/FEVER.png'),
  },
  SORE_THROAT: {
    title: 'SORE THROAT',
    image: require('../../assets/img/symptoms/SORE_THROAT.png'),
  },
  COUGH: {
    title: 'COUGH',
    image: require('../../assets/img/symptoms/COUGH.png'),
  },
  MUSCLE_PAIN: {
    title: 'MUSCLE PAIN',
    image: require('../../assets/img/symptoms/MUSCLE_PAIN.png'),
  },
  RUNNY_NOSE: {
    title: 'RUNNY NOSE',
    image: require('../../assets/img/symptoms/RUNNY_NOSE.png'),
  },
  HEADACHE: {
    title: 'HEADACHE',
    image: require('../../assets/img/symptoms/HEADACHE.png'),
  },
  NAUSEA_VOMIT: {
    title: 'NAUSEA VOMIT',
    image: require('../../assets/img/symptoms/NAUSEA_VOMIT.png'),
  },
  FATIGUE: {
    title: 'FATIGUE',
    image: require('../../assets/img/symptoms/FATIGUE.png'),
  },
  SNEEZE: {
    title: 'SNEEZE',
    image: require('../../assets/img/symptoms/SNEEZE.png'),
  },
  DURATION: {
    title: 'DURATION',
    image: require('../../assets/img/symptoms/DURATION.png'),
    text: 'Since how many days you are ill ?',
  },
};

function SymptomsItem(props) {
  const {type, slider, value, step, maximumValue, onValueChange} = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.context}>
        <Image source={types[type].image} style={styles.image} />
        <View>
          <Text style={[styles.title, slider && styles.titleBold]}>
            {types[type].title}
          </Text>
          {types[type].text && (
            <Text style={styles.text}>{types[type].text}</Text>
          )}
        </View>
      </View>
      {slider && (
        <View style={styles.progress}>
          <SymptomsSlider
            slider={slider}
            onValueChange={onValueChange}
            value={value}
            step={step}
            maximumValue={maximumValue}
          />
        </View>
      )}
    </View>
  );
}

SymptomsItem.defaultProps = {
  type: 'FEVER',
  slider: false,
};

export default SymptomsItem;
