import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';
export default StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 44,
    borderRadius: 44,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 26,
    marginBottom: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#FF2200',
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginRight: 15,
  },
  title: {
    fontFamily: theme.montserratMedium,
    fontSize: 14,
    color: 'white',
  },
  facebook: {
    backgroundColor: '#2041AA',
    borderWidth: 0,
  },
  googleTitle: {
    color: '#FD1414',
  },
});
