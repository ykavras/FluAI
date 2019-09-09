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
    paddingTop: 40,
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
    paddingVertical: 40,
  },
  button: {
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFAA2B',
  },
  buttonTitle: {
    fontFamily: theme.robotoBold,
    fontSize: 14,
    color: 'white',
    paddingHorizontal: 15,
    minWidth: 150,
    textAlign: 'center',
  },
});
