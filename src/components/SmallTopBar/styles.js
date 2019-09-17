import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  body: {
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.16,
    shadowRadius: 10,
    zIndex: 2,
    elevation: 2,
    marginTop: -12,
  },
  wrapper: {
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    shadowColor: '#7364F8',
    shadowOffset: {
      width: -2.72,
      height: 5.35,
    },
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 5,
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 6,
  },
  buttonTitle: {
    fontFamily: theme.montserratBold,
    fontSize: 10,
    color: '#0F0250',
  },
  last: {},
  lastText: {
    fontFamily: theme.montserratMedium,
    fontSize: 10,
    color: '#FFFFFF',
    textAlign: 'right',
  },
  lastBold: {
    fontFamily: theme.montserratSemiBold,
  },
});
