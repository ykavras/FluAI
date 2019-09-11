import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  progressWrapper: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressWrapperTitle: {
    position: 'absolute',
    width: 98,
    height: 98,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressCount: {
    textAlign: 'center',
    fontFamily: theme.montserratMedium,
    fontSize: 18,
    color: 'white',
  },
  progressText: {
    textAlign: 'center',
    paddingTop: 4,
    fontFamily: theme.montserratBold,
    fontSize: 12,
    color: 'white',
  },
});
