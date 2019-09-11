import React, {Fragment} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {Animated, Easing, Text, View, TouchableOpacity} from 'react-native';
import {Login, Signup, Questions} from '../../screens/Auth/';
import MainIcon from '../../assets/icons/Main';
import ReportsIcon from '../../assets/icons/Reports';
import NotificationIcon from '../../assets/icons/Notification';
import SettingsIcon from '../../assets/icons/Settings';
import styles from './styles';
import {
  OnBoarding,
  Camera,
  Analyzing,
  AnalyzingAnswer,
  Symptoms,
  SymptomsQuestion,
  Main,
} from '../../screens/';

const Tabs = createBottomTabNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          return (
            <Fragment>
              <MainIcon style={styles.buttonIcon} fill={focused ? '#2C1DEB' : '#ccccd5'}/>
              <Text style={[styles.buttonTitle, focused && styles.btnActTitle]}>Main</Text>
            </Fragment>
          );
        },
      },
    },
    Reports: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          return (
            <Fragment>
              <ReportsIcon style={styles.buttonIcon} fill={focused ? '#2C1DEB' : '#ccccd5'}/>
              <Text style={[styles.buttonTitle, focused && styles.btnActTitle]}>Reports</Text>
            </Fragment>
          );
        },
      },
    },
    Notifications: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          return (
            <Fragment>
              <NotificationIcon style={styles.buttonIcon} fill={focused ? '#2C1DEB' : '#ccccd5'}/>
              <Text style={[styles.buttonTitle, focused && styles.btnActTitle]}>Notifications</Text>
            </Fragment>
          );
        },
      },
    },
    Settings: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          return (
            <Fragment>
              <SettingsIcon style={styles.buttonIcon} fill={focused ? '#2C1DEB' : '#ccccd5'}/>
              <Text style={[styles.buttonTitle, focused && styles.btnActTitle]}>Settings</Text>
            </Fragment>
          );
        },
      },
    },
  },
  {
    tabBarComponent: props => {
      const {
        navigation: {
          state: {index, routes},
        },
        style,
        renderIcon,
        jumpTo,
      } = props;
      return (
        <View style={[styles.menuWrapper, {...style}]}>
          {routes.map((route, idx) => (
            <TouchableOpacity
              key={route.key}
              style={styles.menuButton}
              onPress={() => jumpTo(route.key)}>
              {renderIcon({route, focused: index === idx})}
            </TouchableOpacity>
          ))}
        </View>
      );
    },
    tabBarOptions: {
      showLabel: false,
      style: {},
    },
  },
  {
    tabBarOptions: {
      labelStyle: {
        display: 'none',
      },
      style: {
        height: 85,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
    },
  },
);

const StackNavigator = createStackNavigator(
  {
    subNavigator: {
      screen: Tabs,
      navigationOptions: {header: null},
    },
    Login,
    Signup,
    Questions,
    OnBoarding,
    Camera,
    Analyzing,
    AnalyzingAnswer,
    Symptoms,
    SymptomsQuestion,
    Main,
  },
  {
    headerMode: 'none',
    navigationOptions: {headerVisible: false},
    mode: 'card',
    defaultNavigationOptions: {
      gesturesEnabled: false,
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
    Main,
  },
  {
    initialRouteName: 'Main',
  },
);

export default createAppContainer(RootNavigator);
