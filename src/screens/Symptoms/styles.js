import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../lib/theme';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const width = Dimensions.get('window').width;

let paddingHorizontal = 14;
let title = 20;
let textMt = 30;
let text = 12;

if (width < 375) {
  paddingHorizontal = 7;
  title = 16;
  textMt = 15;
  text = 10;
}

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal,
    ...ifIphoneX(
      {
        paddingTop: 40,
      },
      {
        paddingTop: 10,
      },
    ),
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 33,
    height: 33,
    resizeMode: 'contain',
  },
  logoTitle: {
    fontFamily: theme.robotoBold,
    fontSize: 16,
    color: 'white',
  },
  context: {
    paddingTop: 10,
    paddingBottom: 30,
  },
  title: {
    fontFamily: theme.montserratBold,
    fontSize: title,
    color: 'white',
    textAlign: 'center',
  },
  textMedium: {
    paddingTop: textMt,
    fontFamily: theme.montserratMedium,
  },
  text: {
    fontFamily: theme.montserratLight,
    fontSize: text,
    color: 'white',
    lineHeight: 20,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
  },
  button: {
    borderRadius: 30,
  },
  buttonTitle: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonReset: {
    backgroundColor: '#8534AE',
  },
  buttonNext: {
    backgroundColor: '#FFAA2B',
    minWidth: 120,
  },
  buttonTitleReset: {
    fontFamily: theme.montserratMedium,
  },
  buttonTitleNext: {
    fontFamily: theme.montserratBold,
  },
});
