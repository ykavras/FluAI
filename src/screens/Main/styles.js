import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  reportWrapper: {
    paddingVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reportTitle: {
    fontFamily: theme.montserratBold,
    fontSize: 14,
    color: '#363636',
    textAlign: 'center',
  },
  healedBtn: {
    position: 'absolute',
    right: 14,
  },
});
