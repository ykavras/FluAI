import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#3A3A3A',
    marginHorizontal: 2.5,
    backgroundColor: '#555555',
  },
  inactiveDotStyle: {
    backgroundColor: 'white',
  },
});
