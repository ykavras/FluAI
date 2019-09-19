import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {SymptomsItem} from '../index';

function YourSymptoms(props) {
  const {data, maximumValue, onValueChange} = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperIn}>
        <View style={styles.top}>
          <Text style={styles.title}>YOUR SYMPTOMS</Text>
          <Text style={styles.smallText}>Last Rate : Today 14:20</Text>
        </View>
        <View style={styles.data}>
          <FlatList
            data={data}
            renderItem={({item, i}) => {
              return (
                <SymptomsItem
                  key={`item_${i}`}
                  type={item.type}
                  slider={item.slider}
                  step={item.step}
                  maximumValue={maximumValue}
                  onValueChange={onValueChange}
                  value={item.value}
                  trackColor="#EFEFEF"
                  thumbColor="#535353"
                  tintColor="#535353"
                />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}

YourSymptoms.defaultProps = {};

export default YourSymptoms;
