import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Header, HealedButton, ReportBoxWrapper} from '../../components';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  render() {
    const {dataBoxes} = this.state;
    return (
      <View style={styles.wrapper}>
        <Header
          bottom
          fill={38}
          progressText="Bacterial Pharyngitis"
          text="Your recovery will takes"
          textBold="3-4 days"
          textSmall="(approx.)"
          share={() => alert('SHARE')}
          onPress1={() => alert('REPORT')}
          onPress2={() => alert('RE-ANALYZE')}
        />
        <View style={styles.reportWrapper}>
          <Text style={styles.reportTitle}>YOUR REPORT</Text>
          <HealedButton style={styles.healedBtn} />
        </View>
        <ReportBoxWrapper data={dataBoxes} />
      </View>
    );
  }
}

export default Main;
