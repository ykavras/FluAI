import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  button: {
    backgroundColor: '#33CB13',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  icon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: theme.montserratBold,
    fontSize: 10,
    color: 'white',
    paddingLeft: 6,
  },
});
