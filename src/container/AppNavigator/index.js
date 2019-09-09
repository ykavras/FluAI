import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Animated, Easing} from 'react-native';
import {Login, Signup, Questions} from '../../screens/Auth/';
import {OnBoarding, Camera} from '../../screens/';

const StackNavigator = createStackNavigator(
  {
    Login,
    Signup,
    Questions,
    OnBoarding,
    Camera,
  },
  {
    headerMode: 'none',
    navigationOptions: {headerVisible: false},
    mode: 'card',
    defaultNavigationOptions: {
      gesturesEnabled: true,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.ease,
      },
    }),
  },
);

const RootNavigator = createSwitchNavigator(
  {
    StackNavigator,
    Camera,
  },
  {
    initialRouteName: 'Camera',
  },
);

export default createAppContainer(RootNavigator);
