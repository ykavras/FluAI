import React, {Component} from 'react';
import {View, PanResponder} from 'react-native';
import styles from './styles';
import {
  DiagnoseAnalysis,
  DiagnoseContext,
  Header,
  ReportBoxWrapper,
} from '../../components';

class Diagnose extends Component {
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
      toggle: true,
    };
  }

  onToggle = () => {
    const {toggle} = this.state;
    this.setState({toggle: !toggle});
  };
  render() {
    const {dataBoxes, toggle} = this.state;
    return (
      <View style={styles.wrapper}>
        <Header title="MY DIAGNOSE" />
        <DiagnoseAnalysis
          toggleWrapper={toggle}
          toggle={() => this.onToggle()}
        />
        <View style={styles.dataContent}>
          <ReportBoxWrapper
            firstContent={
              <DiagnoseContext
                title="COMMON COLD"
                text="The common cold, also known simply as a cold, is a viral infectious disease of the upper respiratory tract that primarily affects the nose. The throat, sinuses, and larynx may also be affected.These may include coughing, sore throat, runny nose, sneezing, headache, and fever."
              />
            }
            data={dataBoxes}
          />
        </View>
      </View>
    );
  }
}

export default Diagnose;
