import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Progress from '../Progress';
import ShareIcon from '../../assets/icons/Share';

function HeaderBottomLeft(props) {
  const {size, width, fill, text, share} = props;
  return (
    <View style={styles.left}>
      <Progress size={size} width={width} fill={fill} text={text} />
      <TouchableOpacity style={styles.shareButton} onPress={share}>
        <ShareIcon style={styles.shareIcon} />
        <Text style={styles.shareButtonTitle}>Share</Text>
      </TouchableOpacity>
    </View>
  );
}

HeaderBottomLeft.defaultProps = {
  size: 150,
  width: 24,
  fill: 80,
  text: 'Text',
};

export default HeaderBottomLeft;
