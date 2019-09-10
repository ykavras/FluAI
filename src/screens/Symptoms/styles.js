import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';
import {ifIphoneX} from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    ...ifIphoneX(
      {
        paddingTop: 40,
        paddingBottom: 20,
      },
      {
        paddingVertical: 10,
      },
    ),
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 33,
    height: 33,
    resizeMode: 'contain',
  },
  logoTitle: {
    fontFamily: theme.robotoBold,
    fontSize: 16,
    color: 'white',
  },
  context: {
    paddingTop: 10,
    paddingBottom: 30,
  },
  title: {
    fontFamily: theme.montserratBold,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  textMedium: {
    paddingTop: 30,
    fontFamily: theme.montserratMedium,
    fontSize: 12,
    color: 'white',
    lineHeight: 20,
    textAlign: 'center',
  },
  text: {
    fontFamily: theme.montserratLight,
    fontSize: 12,
    color: 'white',
    lineHeight: 20,
    textAlign: 'center',
  },
});
