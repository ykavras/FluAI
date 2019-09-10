import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  buttons: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 4,
    elevation: 4,
    width: '100%',
  },
  button: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    borderRadius: 50,
  },
  no: {backgroundColor: '#ff3f3f'},
  yes: {backgroundColor: '#2fbd57'},
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
