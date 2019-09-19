import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    height: 30,
    borderRadius: 30,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  slider: {
    flex: 1,
  },
  trackStyle: {
    borderRadius: 10,
  },
  thumbStyle: {
    borderWidth: 4,
    borderColor: 'white',
  },
  value: {
    fontFamily: theme.montserratBold,
    fontSize: 12,
    lineHeight: 14,
    color: '#7E7E7E',
    paddingLeft: 8,
  },
});
