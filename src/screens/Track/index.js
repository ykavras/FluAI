import React, {Component} from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import { AnalysisToday, Header, MediumTextBox, ReportBox, SmallTopBar } from '../../components';
import BigTextBox from "../../components/BigTextBox";

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
  };
  render() {
    const {dataBoxes} = this.state;
    return (
      <View style={styles.wrapper}>
        <Header title="MY TREATMENT" color1="#005873" color2="#00459F" />
        <SmallTopBar
          color1="#00459F"
          color2="#3485E1"
          onPress={() => alert('My Diagnose')}
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
