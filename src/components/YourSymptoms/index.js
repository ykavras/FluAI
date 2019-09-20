import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

function YourSymptoms(props) {
  const {data, renderItems, okPress} = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperIn}>
        <View style={styles.top}>
          <Text style={styles.title}>YOUR SYMPTOMS</Text>
          <Text style={styles.smallText}>Last Rate : Today 14:20</Text>
        </View>
        <View style={styles.data}>
          <FlatList data={data} renderItem={renderItems} />
          <LinearGradient
            style={styles.okButtonWrapper}
            colors={['#01A733', '#15CC21']}
            start={[0, 1]}
            end={[1, 0]}>
            <TouchableOpacity style={styles.okButton} onPress={okPress}>
              <Text style={styles.okButtonTitle}>OK !</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}

YourSymptoms.defaultProps = {};

export default YourSymptoms;
