import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    height: 100,
    zIndex: -1,
    elevation: -1,
    marginTop: -12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingHorizontal: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 6,
  },
  buttonTitle: {
    fontFamily: theme.montserratBold,
    fontSize: 10,
    color: '#0F0250',
  },
  last: {},
  lastText: {
    fontFamily: theme.montserratMedium,
    fontSize: 10,
    color: '#FFFFFF',
    textAlign: 'right',
  },
  lastBold: {
    fontFamily: theme.montserratBold,
  },
});
