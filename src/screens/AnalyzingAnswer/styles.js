import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../lib/theme';
const {width, height} = Dimensions.get('window');

let linearGradient = 1.2;
let contentPh = 30;
let icon = 30;
let title = 24;
let text = 18;
let iconMb = 30;
let textVerticalPadding = 30;

if (width < 375 || height < 667) {
  linearGradient = 1;
  contentPh = 20;
  icon = 25;
  title = 20;
  text = 14;
  iconMb = 15;
  textVerticalPadding = 15;
}

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  linearGradient: {
    flex: linearGradient,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  pattern: {
    height: width * 0.1,
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
    paddingHorizontal: contentPh,
  },
  icon: {
    width: icon,
    height: icon,
    resizeMode: 'contain',
    marginBottom: iconMb,
  },
  title: {
    textAlign: 'center',
    fontFamily: theme.robotoMedium,
    fontSize: title,
    color: '#FF0000',
  },
  titleSuccess: {
    color: '#40DB11',
  },
  text: {
    textAlign: 'center',
    fontFamily: theme.robotoLight,
    fontSize: text,
    lineHeight: text + 12,
    color: '#707070',
    paddingVertical: textVerticalPadding,
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
});
