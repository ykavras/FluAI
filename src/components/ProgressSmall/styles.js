import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  progressWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '180deg'}],
  },
  progressWrapperTitle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '-180deg'}],
  },
  progressCount: {
    textAlign: 'center',
    fontFamily: theme.montserratBold,
    fontSize: 10,
    lineHeight: 12,
    color: 'white',
  },
  progressText: {
    textAlign: 'center',
    paddingTop: 4,
    fontFamily: theme.montserratMedium,
    fontSize: 10,
    lineHeight: 12,
    color: 'white',
  },
});
