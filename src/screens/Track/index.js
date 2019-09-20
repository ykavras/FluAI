import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {
  AnalysisToday,
  Header,
  ReportBox,
  SmallTopBar,
  SymptomsItem,
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
    yourSymptoms: false,
  };

  onChangeValue = (type, val) => {
    const {data} = this.state;
    const newData = data.map(el =>
      el.type === type ? {...el, value: val} : el,
    );
    this.setState({data: newData});
  };

  openYourSymptoms = () => {
    this.setState({yourSymptoms: !this.state.yourSymptoms});
  };

  render() {
    const {dataBoxes, data, yourSymptoms} = this.state;
    return (
      <View style={styles.wrapper}>
        <Header title="TRACK" color1="#005873" color2="#00459F" />
        <SmallTopBar
          color1="#00459F"
          color2="#3485E1"
          onPress={() => alert('My Diagnose')}
        />
        {yourSymptoms && (
          <YourSymptoms
            data={data}
            okPress={() => this.openYourSymptoms()}
            renderItems={({item, i}) => {
              return (
                <SymptomsItem
                  color="#545454"
                  key={`item_${i}`}
                  type={item.type}
                  slider={item.slider}
                  step={item.step}
                  maximumValue={item.maximumValue}
                  onValueChange={val => this.onChangeValue(item.type, val)}
                  value={item.value}
                  trackColor="#EFEFEF"
                  thumbColor="#535353"
                  tintColor="#535353"
                />
              );
            }}
          />
        )}
        <ScrollView
          contentContainerStyle={styles.context}
          showsVerticalScrollIndicator={false}>
          <AnalysisToday todayPress={() => this.openYourSymptoms()} />
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
