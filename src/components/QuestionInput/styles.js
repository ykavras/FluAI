import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';
export default StyleSheet.create({
  wrapper: {
    width: '100%',
    borderBottomWidth: 2,
    borderColor: '#B7BFFF',
    marginBottom: 22,
  },
  inputIOS: {
    fontSize: 14,
    fontFamily: theme.robotoMedium,
    paddingVertical: 10,
    color: '#666666',
  },
});
