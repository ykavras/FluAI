import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

function ProfileImage(props) {
  const {image, onPress, count} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.profiles}>
      <View style={styles.notification}>
        <Text style={styles.notificationNumber}>{count}</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
}

ProfileImage.defaultProps = {
  count: 0,
  image:
    'https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
};

export default ProfileImage;
