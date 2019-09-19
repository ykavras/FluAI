import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 4,
    elevation: 4,
    justifyContent: 'center',
    padding: 14,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  wrapperIn: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#7364F8',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 18,
    elevation: 5,
    borderRadius: 15,
    padding: 14,
    borderWidth: 1,
    borderColor: '#B1B1B1',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontFamily: theme.montserratBold,
    fontSize: 14,
    color: '#494949',
  },
  smallText: {
    fontFamily: theme.montserratRegular,
    fontSize: 8,
    color: '#545454',
  },
  progress: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#BAD0F1',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 20,
  },
	data:{},
});
