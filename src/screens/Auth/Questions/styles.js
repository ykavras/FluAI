import {StyleSheet} from 'react-native';
import theme from '../../../lib/theme';
export default StyleSheet.create({
  logo: {
    width: 150,
    height: 132,
    resizeMode: 'contain',
    position: 'absolute',
    right: -50,
    bottom: -50,
    transform: [{rotate: '180deg'}],
    zIndex: -1,
  },
  doctor: {
    width: 98,
    height: 170,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 24,
  },
  doctorTitle: {
    fontFamily: theme.robotoBold,
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 50,
  },
});
