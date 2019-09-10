import {StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  preview: {
    flex: 1,
  },
  cameraFoot: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 3,
    elevation: 3,
    ...ifIphoneX(
      {
        height: 120,
      },
      {
        height: 100,
      },
    ),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
});
