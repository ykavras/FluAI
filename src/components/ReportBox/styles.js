import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../lib/theme';

const width = Dimensions.get('window').width;

let wrapperWidth = width / 2 - 22;

if (width < 375) {
  wrapperWidth = width - 22;
}

export default StyleSheet.create({
  wrapper: {
    width: wrapperWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#7364F8',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 15,
    marginBottom: 12,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 12,
  },
  context: {
    flex: 1,
  },
  title: {
    fontFamily: theme.montserratBold,
    fontSize: 16,
    color: '#0F0250',
  },
  description: {
    fontFamily: theme.montserratMedium,
    fontSize: 10,
    lineHeight: 12,
    color: '#BCBCC8',
    paddingTop: 4,
  },
});
