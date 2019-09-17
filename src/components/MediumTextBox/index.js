import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

function MediumTextBox(props) {
  const {data} = props;
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.title, {color: data.titleColor}]}>{data.title}</Text>
      {data.texts.map((item, i) => {
        return (
          <View key={`text_${i}`} style={styles.iconText}>
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        );
      })}
    </View>
  );
}

MediumTextBox.defaultProps = {
  title: 'Title',
  icon: undefined,
  text: 'Text',
};

export default MediumTextBox;
