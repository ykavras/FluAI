import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {Header, HealedButton, ReportBox} from '../../components';

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
        <FlatList
          columnWrapperStyle={styles.columnFlatList}
          contentContainerStyle={styles.contentFlatList}
          numColumns={2}
          data={dataBoxes}
          renderItem={({item, i}) => {
            return (
              <ReportBox
                key={`reportBox_${i}`}
                title={item.title}
                text={item.description}
                type={item.type}
              />
            );
          }}
        />
      </View>
    );
  }
}

export default Main;
