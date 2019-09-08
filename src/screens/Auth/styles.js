import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../lib/theme';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoSmall: {
    width: 49,
    height: 43,
    resizeMode: 'contain',
    marginRight: 5,
  },
  logoTitle: {
    fontFamily: theme.robotoBold,
    fontSize: 22,
    color: '#505050',
  },
  logo: {
    width: 220,
    height: 192,
    resizeMode: 'contain',
    position: 'absolute',
    right: -66,
    top: -10,
  },
  circle: {
    position: 'absolute',
    left: -width / 2,
    bottom: -40,
    width,
    height: width,
    borderRadius: width / 2,
    backgroundColor: '#FFCC00',
    opacity: 0.2,
    zIndex: -1,
  },
  formWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    padding: 20,
  },
});
