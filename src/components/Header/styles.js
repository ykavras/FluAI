import {StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {},
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    paddingHorizontal: 12,
    paddingBottom: 10,
    ...ifIphoneX(
      {
        paddingTop: 40,
      },
      {
        paddingTop: 30,
      },
    ),
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
  profiles: {
    width: 76,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notification: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#EF4F4E',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  notificationNumber: {
    fontFamily: theme.montserratMedium,
    fontSize: 10,
    color: 'white',
  },
  imageWrapper: {
    width: 45,
    height: 45,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 36,
    height: 36,
    resizeMode: 'cover',
    borderRadius: 19,
  },
});
