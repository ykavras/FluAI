import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    shadowColor: '#7364F8',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginVertical: 12,
  },
  title: {
    fontFamily: theme.montserratBold,
    color: '#4F4F4F',
    fontSize: 14,
    lineHeight: 28,
  },
  text: {
    fontFamily: theme.montserratMedium,
    color: '#4F4F4F',
    fontSize: 12,
    lineHeight: 24,
    paddingTop: 4,
  },
});
