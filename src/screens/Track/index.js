import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {
  AnalysisToday,
  Header,
  ReportBox,
  SmallTopBar,
  YourSymptoms,
} from '../../components';

class Track extends Component {
  state = {
    dataBoxes: [
      {
        title: 'Diagnose',
        description: 'See your result is flu or cold ?',
        type: 'Diagnose',
      },
      {
        title: 'Treatment',
        description: 'What you should do ?',
        type: 'Treatment',
      },
      {
        title: 'Track',
        description: 'How is your symptoms today ?',
        type: 'Track',
      },
    ],
    data: [
      {
        type: 'RUNNY_NOSE',
        value: 0,
        slider: true,
        step: 1,
        maximumValue: 10,
      },
      {
        type: 'NAUSEA_VOMIT',
        value: 0,
        slider: true,
        step: 1,
        maximumValue: 10,
      },
      {
        type: 'HEADACHE',
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
        type: 'FATIGUE',
        value: 0,
        slider: false,
        step: 1,
        maximumValue: 10,
      },
    ],
  };

  onChangeValue = (type, val) => {
    const {data} = this.state;
    const newData = data.map(el =>
      el.type === type ? {...el, value: val} : el,
    );
    this.setState({data: newData});
  };
  render() {
    const {dataBoxes, data} = this.state;
    return (
      <View style={styles.wrapper}>
        <Header title="TRACK" color1="#005873" color2="#00459F" />
        <SmallTopBar
          color1="#00459F"
          color2="#3485E1"
          onPress={() => alert('My Diagnose')}
        />
        <YourSymptoms
          data={data}
          onValueChange={val => this.onChangeValue(item.type, val)}
        />
        <ScrollView
          contentContainerStyle={styles.context}
          showsVerticalScrollIndicator={false}>
          <AnalysisToday />
          <View style={styles.reportWrapper}>
            {dataBoxes.map((item, i) => {
              return (
                <ReportBox
                  key={`reportBox_${i}`}
                  title={item.title}
                  text={item.description}
                  type={item.type}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Track;
