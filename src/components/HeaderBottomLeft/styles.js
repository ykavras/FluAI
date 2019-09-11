import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  shareIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 6,
  },
  shareButtonTitle: {
    fontFamily: theme.montserratBold,
    fontSize: 14,
    color: 'white',
  },
});
