import React, {Fragment} from 'react';
import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import styles from './styles';
import {HeaderBottomButton, HealedButton, Progress} from '../index';
import ShareIcon from '../../assets/icons/Share';
import ClockIcon from '../../assets/icons/Clock';
import Treatment from '../../assets/icons/Treatment';
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('window').width;

let size = 170;
let borderWidth = 24;

if (width < 375) {
  size = 125;
  borderWidth = 14;
}

function DiagnoseAnalysis(props) {
  const {
    toggleWrapper,
    toggle,
    date,
    onPressReAnalyze,
    onPressShare,
    progressCount,
    infoTextData,
    clockText,
    clockDays,
    clockSmallText,
    onPressTreatment,
    onPressHealed,
  } = props;
  return (
    <Fragment>
      {toggleWrapper && (
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
              <Text style={styles.lastAnalysisDate}>{date}</Text>
            </View>
            <HeaderBottomButton
              title="RE-ANALYZE"
              color1="#0FAC92"
              color2="#0FB731"
              onPress={onPressReAnalyze}
            />
          </View>
          <View style={styles.center}>
            <Progress
              fill={progressCount}
              size={size}
              width={borderWidth}
              text="Bacterial Pharyngitis"
            />
            <TouchableOpacity style={styles.shareButton} onPress={onPressShare}>
              <ShareIcon style={styles.shareIcon} />
              <Text style={styles.shareButtonTitle}>Share</Text>
            </TouchableOpacity>
            <View style={styles.centerInfo}>
              {infoTextData.map((item, i) => {
                return (
                  <Text key={`info_${i}`} style={styles.infoText}>
                    <Text style={styles.infoTextBold}>%{item.percent} </Text>
                    {item.text}
                  </Text>
                );
              })}
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.textBox}>
              <ClockIcon fill="#2D2D2D" style={styles.clockIcon} />
              <View style={styles.textBoxContext}>
                <Text style={styles.textBoxText}>{clockText}</Text>
                <Text style={styles.textBoxSmallText}>
                  <Text style={styles.textBoxBold}>{clockDays} days</Text>{' '}
                  {clockSmallText}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={onPressTreatment}>
              <Treatment style={styles.buttonIcon} />
              <Text style={styles.buttonTitle}>My Treatment</Text>
            </TouchableOpacity>
          </View>
          <HealedButton style={styles.healedBtn} onPress={onPressHealed}/>
        </LinearGradient>
      )}
      <TouchableOpacity style={styles.toggleBtn} onPress={toggle}>
        <View style={styles.toggleBtnLine} />
      </TouchableOpacity>
    </Fragment>
  );
}

DiagnoseAnalysis.defaultProps = {
  toggleWrapper: true,
  date: 'Yesterday 15:53',
  progressCount: 0,
  clockText: 'Your recovery will takes',
  clockDays: '3-4',
  clockSmallText: '(approx.)',
};

export default DiagnoseAnalysis;
