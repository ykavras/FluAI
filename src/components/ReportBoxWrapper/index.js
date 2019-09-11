import React from 'react';
import {Dimensions, FlatList} from 'react-native';
import styles from './styles';
import {ReportBox} from '../index';

const width = Dimensions.get('window').width;

let column = styles.columnFlatList;
let count = 2;

if (width < 375) {
  column = undefined;
  count = undefined;
}

function ReportBoxWrapper(props) {
  const {data} = props;
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={column}
      contentContainerStyle={styles.contentFlatList}
      numColumns={count}
      data={data}
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
  );
}

ReportBoxWrapper.defaultProps = {};

export default ReportBoxWrapper;
