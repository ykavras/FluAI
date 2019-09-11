import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import ClockIcon from '../../assets/icons/Clock';
import HeaderBottomButton from '../HeaderBottomButton';

function HeaderBottomRight(props) {
  const {onPress1, onPress2, text, textBold, textSmall} = props;
  return (
    <View style={styles.right}>
      <HeaderBottomButton
        title="REPORT"
        color1="#FF5E59"
        color2="#FF7600"
        onPress={onPress1}
      />
      <HeaderBottomButton
        title="RE-ANALYZE"
        color1="#39DFC4"
        color2="#15CC3A"
        onPress={onPress2}
      />
      <View style={styles.rightContext}>
        <ClockIcon style={styles.clockIcon} />
        <View style={styles.textWrapper}>
          <Text style={styles.rightText}>{text}</Text>
          <Text style={styles.rightTextBold}>
            {textBold} <Text style={styles.rightText}>{textSmall}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

HeaderBottomRight.defaultProps = {
  text: 'Your recovery will takes',
  textBold: '3-4 days',
  textSmall: '(approx.)',
};

export default HeaderBottomRight;
