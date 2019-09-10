import {StyleSheet, Dimensions} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  previewImage: {
    ...ifIphoneX(
      {
        height: Dimensions.get('window').height - 80,
      },
      {
        height: Dimensions.get('window').height - 70,
      },
    ),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  loader: {
    position: 'absolute',
    zIndex: 1,
  },
});
