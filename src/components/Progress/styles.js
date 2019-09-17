import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../lib/theme';

const width = Dimensions.get('window').width;

let size = 150;
let progressCount = 18;
let progressText = 12;

if (width < 375) {
  size = 125;
  progressCount = 14;
  progressText = 10;
}

export default StyleSheet.create({
  progressWrapper: {
    width: size,
    height: size,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '180deg'}],
  },
  progressWrapperTitle: {
    position: 'absolute',
    width: 98,
    height: 98,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '-180deg'}],
  },
  progressCount: {
    textAlign: 'center',
    fontFamily: theme.montserratMedium,
    fontSize: progressCount,
    lineHeight: progressCount,
    color: 'white',
  },
  progressText: {
    textAlign: 'center',
    paddingTop: 4,
    fontFamily: theme.montserratBold,
    fontSize: progressText,
    lineHeight: progressText + 4,
    color: 'white',
  },
});
