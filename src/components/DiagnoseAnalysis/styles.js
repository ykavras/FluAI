import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../lib/theme';
const width = Dimensions.get('window').width;

let top = 130;

if (width < 375) {
  top = 110;
}

export default StyleSheet.create({
  wrapperTop: {
    zIndex: -1,
    elevation: -1,
    marginTop: -12,
    paddingTop: 24,
    paddingHorizontal: 12,
    paddingBottom: 24,
  },
  background: {
    position: 'absolute',
    left: -Dimensions.get('window').width / 2.5,
    top: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    resizeMode: 'cover',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lastAnalysis: {},
  lastAnalysisText: {
    fontFamily: theme.montserratBold,
    fontSize: 14,
    color: '#FFFFFF',
  },
  lastAnalysisDate: {
    fontFamily: theme.montserratMedium,
    fontSize: 12,
    color: '#FFFFFF',
    paddingTop: 4,
  },
  center: {
    alignItems: 'center',
    marginVertical: 24,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: top / 2,
    right: 12,
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
  centerInfo: {
    marginTop: 30,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.04)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#7364F8',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 1,
  },
  infoText: {
    fontFamily: theme.montserratLight,
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    paddingVertical: 4,
  },
  infoTextBold: {
    fontFamily: theme.montserratBold,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 10,
    shadowColor: '#7364F8',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  clockIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 6,
  },
  textBoxContext: {},
  textBoxText: {
    fontFamily: theme.montserratMedium,
    color: '#3B3B3B',
    fontSize: 10,
  },
  textBoxBold: {
    fontFamily: theme.montserratBold,
    color: '#4F408C',
    fontSize: 14,
  },
  textBoxSmallText: {
    fontFamily: theme.montserratMedium,
    color: '#3B3B3B',
    fontSize: 8,
  },
  button: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#7364F8',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 8,
  },
  buttonTitle: {
    fontFamily: theme.montserratBold,
    fontSize: 11,
    lineHeight: 13,
    color: '#0F0250',
  },
  healedBtn: {
    marginTop: 14,
    alignSelf: 'center',
  },
  toggleBtn: {
    width: 60,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: -10,
    alignSelf: 'center',
    shadowColor: '#262626',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
  toggleBtnLine: {
    width: 40,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#262626',
  },
});
