import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cameraBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'dotted',
    zIndex: 1,
    padding: 10,
  },
  turnBtn: {
    backgroundColor: '#0D162B',
    width: 50,
    height: 50,
  },
  cameraIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
