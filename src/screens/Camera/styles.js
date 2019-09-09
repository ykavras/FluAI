import {StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  cameraHead: {
    ...ifIphoneX(
      {
        height: 80,
        paddingTop: 30,
      },
      {
        height: 70,
        paddingTop: 15,
      },
    ),
  },
  cameraHeadBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  arrow: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 24,
  },
  cameraHeadTitle: {
    fontFamily: theme.robotoMedium,
    fontSize: 14,
    lineHeight: 16,
    color: 'white',
  },
  preview: {
    flex: 1,
  },
  cameraFoot: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
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
