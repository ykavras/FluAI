import {StyleSheet} from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  profiles: {
    width: 76,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notification: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#EF4F4E',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  notificationNumber: {
    fontFamily: theme.montserratMedium,
    fontSize: 10,
    color: 'white',
  },
  imageWrapper: {
    width: 45,
    height: 45,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 36,
    height: 36,
    resizeMode: 'cover',
    borderRadius: 19,
  },
});
