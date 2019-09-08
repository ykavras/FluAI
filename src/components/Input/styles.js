import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';
export default StyleSheet.create({
  wrapper: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(26,26,26,0.1)',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginLeft: 20,
  },
  input: {
    flex: 1,
    fontFamily: theme.montserratMedium,
    color: '#1A1A1A',
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
