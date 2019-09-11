import {StyleSheet, Dimensions, Platform} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import theme from '../../lib/theme';

const width = Dimensions.get('window').width;

let buttonTitle = 12;

if (width < 375) {
  buttonTitle = 10;
}

export default StyleSheet.create({
  menuWrapper: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    ...Platform.select({
      ios: {
        ...ifIphoneX(
          {
            height: 85,
            paddingBottom: 10,
          },
          {
            height: 60,
          },
        ),
      },
      android: {
        height: 80,
      },
    }),
  },
  menuButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  buttonTitle: {
    fontFamily: theme.montserratBold,
    fontSize: buttonTitle,
    lineHeight: buttonTitle,
    color: '#CCCCD5',
  },
  btnActTitle: {
    color: '#2C1DEB',
  },
});
