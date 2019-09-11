import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

let mb = 60;

if (width < 375) {
  mb = 30;
}

export default StyleSheet.create({
  customForm: {
    paddingBottom: mb,
  },
  formTab: {
    marginBottom: 16,
  },
  formBtnCustom: {
    marginTop: 10,
    marginBottom: mb,
  },
});
