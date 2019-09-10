import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../lib/theme';
export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  linearGradient: {
    flex: 1.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  pattern: {
    height: Dimensions.get('window').width * 0.1,
    resizeMode: 'stretch',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingBottom: Dimensions.get('window').height * 0.2,
  },
  title: {
    textAlign: 'center',
    fontFamily: theme.robotoMedium,
    fontSize: 24,
    color: '#1C1A1A',
  },
  text: {
    textAlign: 'center',
    fontFamily: theme.robotoMedium,
    fontSize: 16,
    lineHeight: 24,
    color: '#707070',
    paddingVertical: 20,
  },
  button: {
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3D9EE9',
  },
  buttonTitle: {
    fontFamily: theme.robotoBold,
    fontSize: 14,
    color: 'white',
    paddingHorizontal: 15,
    minWidth: 150,
    textAlign: 'center',
  },
  wave: {
    width: Dimensions.get('window').width + 100,
    height: Dimensions.get('window').height * 0.3,
    resizeMode: 'stretch',
    position: 'absolute',
    left: -50,
    right: 0,
    bottom: -20,
    zIndex: -1,
  },
});
