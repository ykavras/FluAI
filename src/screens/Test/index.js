import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

class Test extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      links: [
        'Login',
        'Signup',
        'Questions',
        'OnBoarding',
        'Camera',
        'Analyzing',
        'AnalyzingAnswer',
        'Symptoms',
        'SymptomsQuestion',
        'Main',
        'Diagnose',
        'Treatment',
        'Track',
      ],
    };
  }

  button = link => {
    const {navigate} = this.props.navigation;
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate(`${link}`)}>
        <Text style={styles.text}>{link}</Text>
      </TouchableOpacity>
    );
  };

  renderLinks = () => {
    const {links} = this.state;
    return links.map(link => this.button(link));
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView contentContainerStyle={styles.listing}>
          {this.renderLinks()}
        </ScrollView>
      </View>
    );
  }
}

export default Test;
