import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#67b3ff',
  },
  listing: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    paddingVertical: 10,
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    fontFamily: theme.montserratBold,
  },
});
