import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    paddingVertical: 10,
  },
  context: {
    width: 140,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    marginRight: 10,
  },
  title: {
    fontFamily: theme.montserratMedium,
    fontSize: 12,
    color: 'white',
  },
  text: {
    fontFamily: theme.montserratLight,
    fontSize: 10,
    color: 'white',
    paddingTop: 6,
    width: 100,
  },
  progress: {
    flex: 1,
  },
});
