import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#7364F8',
    shadowOffset: {
      width: -2.72,
      height: 5.35,
    },
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 5,
    borderRadius: 15,
    padding: 20,
    marginBottom: 14,
  },
  title: {
    fontFamily: theme.montserratBold,
    fontSize: 14,
    color: '#1C8D00',
    paddingBottom: 10,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 4,
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginRight: 10,
  },
  text: {
    fontFamily: theme.montserratRegular,
    fontSize: 12,
    lineHeight: 18,
    color: '#4A4A4A',
  },
});
