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
    padding: 20,
  },
  title: {
    fontFamily: theme.montserratBold,
    fontSize: 12,
    color: '#262626',
    paddingBottom: 10,
  },
  text: {
    fontFamily: theme.montserratRegular,
    fontSize: 12,
    lineHeight: 24,
    color: '#262626',
  },
  bold: {
    fontFamily: theme.montserratBold,
  },
  not: {
    fontFamily: theme.montserratBold,
    color: '#6A0C60',
  },
  mt: {
    marginTop: 20,
  },
  mb: {
    marginBottom: 20,
  },
});
