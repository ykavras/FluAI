import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  reButtonGradient: {
    borderRadius: 30,
    marginVertical: 6,
  },
  reButton: {
    minWidth: 120,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  reButtonTitle: {
    fontFamily: theme.montserratBold,
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
});
