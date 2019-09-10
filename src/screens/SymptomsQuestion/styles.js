import {Dimensions, StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import theme from '../../lib/theme';

const width = Dimensions.get('window').width;

let paddingHorizontal = 14;
let title = 20;
let text = 14;

if (width < 375) {
  paddingHorizontal = 7;
  title = 16;
  text = 12;
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
  title: {
    fontFamily: theme.montserratBold,
    fontSize: title,
    lineHeight: title * 2,
    color: 'white',
    paddingVertical: 30,
  },
  text: {
    fontFamily: theme.montserratMedium,
    fontSize: text,
    lineHeight: text * 2,
    color: 'white',
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
  buttonNo: {
    width: '30%',
    backgroundColor: '#ff160e',
  },
  buttonYes: {
    width: '60%',
    backgroundColor: '#05dd12',
  },
  buttonTitle: {
    fontFamily: theme.montserratBold,
    color: 'white',
    textAlign: 'center',
  },
  buttonTitleNo: {
    paddingVertical: 5,
    fontSize: 10,
  },
  buttonTitleYes: {
    paddingVertical: 10,
    fontSize: 16,
  },
});
