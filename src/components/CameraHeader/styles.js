import {Platform, StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import theme from '../../lib/theme';

export default StyleSheet.create({
  cameraHead: {
    ...ifIphoneX(
      {
        height: 80,
        paddingTop: 30,
      },
      {
        height: 70,
        paddingTop: Platform.OS === 'ios' ? 15 : 0,
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
});
