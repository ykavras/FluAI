import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#7364F8',
    shadowOffset: {
      width: -2.72,
      height: 5.35,
    },
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 5,
    borderRadius: 15,
    padding: 14,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontFamily: theme.montserratBold,
    fontSize: 16,
    color: '#494949',
  },
  smallText: {
    fontFamily: theme.montserratRegular,
    fontSize: 8,
    color: '#545454',
  },
  iconTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2.5,
  },
  icon: {
    width: 21,
    height: 21,
    resizeMode: 'contain',
    marginRight: 6,
  },
  iconTitle: {
    fontFamily: theme.montserratLight,
    fontSize: 16,
    color: '#494949',
  },
  bold: {
    fontFamily: theme.montserratBold,
    fontSize: 12,
  },
  fluRate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 20,
  },
  fluRateText: {
    fontFamily: theme.montserratRegular,
    fontSize: 10,
    color: '#25B7D3',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientBtn: {
    borderRadius: 18,
    marginRight: 20,
  },
  gradientBtnIn: {
    flex: 1,
  },
  gradientBtnTitle: {
    fontFamily: theme.montserratBold,
    fontSize: 12,
    color: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
});
