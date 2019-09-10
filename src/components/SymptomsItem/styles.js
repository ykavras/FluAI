import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../lib/theme';

const width = Dimensions.get('window').width;

let context = 140;
let image = 32;
let title = 12;

if (width < 375) {
  context = 120;
  image = 22;
  title = 10;
}

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    paddingVertical: 10,
  },
  context: {
    minWidth: context,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: image,
    height: image,
    resizeMode: 'contain',
    marginRight: 10,
  },
  title: {
    fontFamily: theme.montserratMedium,
    fontSize: title,
    color: 'white',
  },
  titleBold: {
    fontFamily: theme.montserratBold,
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
    paddingLeft: 10,
    justifyContent: 'center',
  },
});
