import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../lib/theme';

const width = Dimensions.get('window').width;

let flex = 1;

if (width < 375) {
  flex = 0.8;
}

export default StyleSheet.create({
  left: {
    flex: flex,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  shareIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 6,
  },
  shareButtonTitle: {
    fontFamily: theme.montserratBold,
    fontSize: 14,
    color: 'white',
  },
});
