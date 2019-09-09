import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  date: {
    width: '100%',
    marginBottom: 22,
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: '#B7BFFF',
    alignItems: 'flex-start',
    fontSize: 14,
    fontFamily: theme.robotoMedium,
    paddingVertical: 10,
    color: '#666666',
  },
});
