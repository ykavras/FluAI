import {StyleSheet, Platform} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    paddingHorizontal: 12,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    ...Platform.select({
      ios: {
        ...ifIphoneX(
          {
            paddingTop: 40,
          },
          {
            paddingTop: 30,
          },
        ),
      },
      android: {
        paddingTop: 10,
      },
    }),
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 76,
  },
  logoIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 4,
  },
  logoTitle: {
    fontFamily: theme.robotoBold,
    fontSize: 16,
    lineHeight: 16,
    color: 'white',
  },
  title: {
    fontFamily: theme.montserratBold,
    fontSize: 14,
    color: 'white',
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  bottom: {
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
});
