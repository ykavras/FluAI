import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../lib/theme';

const width = Dimensions.get('window').width;

let size = 10;
let icon = 14;

if (width < 375) {
  size = 8;
  icon = 12;
}

export default StyleSheet.create({
  button: {
    backgroundColor: '#33CB13',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  icon: {
    width: icon,
    height: icon,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: theme.montserratBold,
    fontSize: size,
    color: 'white',
    paddingLeft: 6,
  },
});
