import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import {
  Header,
  MediumTextBox,
  ReportBox,
  SmallTopBar,
} from '../../components';
import BigTextBox from '../../components/BigTextBox';
import homeIcon from '../../assets/img/mediumBox/home.png';
import waterIcon from '../../assets/img/mediumBox/water.png';

class Treatment extends Component {
  state = {
    data: {
      id: 1,
      title: 'SHOULD',
      titleColor: '#1C8D00',
      texts: [
        {
          icon: homeIcon,
          text: 'Stay at home and rest (least 1 day)',
        },
        {
          icon: waterIcon,
          text: 'Drink water at least 1 litres to avoid dehydration',
        },
      ],
    },
    data2: {
      id: 1,
      title: 'MEDICATION',
      titleColor: '#00667A',
      texts: [
        {
          icon: waterIcon,
          text: 'Stay at home and rest (least 1 day)',
        },
        {
          icon: homeIcon,
          text: 'Drink water at least 1 litres to avoid dehydration',
        },
      ],
    },
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
    const {data, data2, dataBoxes} = this.state;
    return (
      <View style={styles.wrapper}>
        <Header title="MY TREATMENT" color1="#7C009B" color2="#2F6B81" />
        <SmallTopBar onPress={() => alert('My Diagnose')} />
        <ScrollView
          contentContainerStyle={styles.context}
          showsVerticalScrollIndicator={false}>
          <BigTextBox style={styles.bigText} />
          <MediumTextBox data={data} />
          <MediumTextBox data={data2} />
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

export default Treatment;
