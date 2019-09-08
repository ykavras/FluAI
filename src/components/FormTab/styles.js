import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 75,
    alignSelf: 'center',
    backgroundColor: 'rgba(185,185,185,0.2)',
  },
  button: {
    flex: 1,
    height: 36,
    justifyContent: 'center',
  },
  btnTitle: {
    fontFamily: theme.robotoMedium,
    fontSize: 14,
    color: 'rgba(29,34,38,0.64)',
    textAlign: 'center',
  },
  activeBtn: {
    backgroundColor: '#4A9EFF',
    borderRadius: 75,
  },
  activeBtnTitle: {
    color: 'white',
  },
});
