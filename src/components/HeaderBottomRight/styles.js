import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  right: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 20,
  },
  rightContext: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  clockIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textWrapper: {},
  rightText: {
    fontFamily: theme.montserratMedium,
    fontSize: 10,
    color: 'white',
  },
  rightTextBold: {
    fontFamily: theme.montserratBold,
    fontSize: 14,
    color: 'white',
    paddingTop: 4,
  },
});
