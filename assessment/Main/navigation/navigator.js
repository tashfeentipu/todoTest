import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import AddScreen from '../screens/addScreen';
import FeedScreen from '../screens/feedScreen';
import LoginScreen from '../screens/loginScreen';
import ProfileScreen from '../screens/profileScreen';

import Icon from '../components/Icon';

import {Colors} from '../constants/Const';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.button,
    height: 96,
  },
  headerTitleStyle: {
    fontWeight: '500',
  },
  headerTintColor: 'white',
};

const testTabNavigator = createBottomTabNavigator(
  {
    add: {
      screen: createStackNavigator(
        {screen: AddScreen},
        {
          defaultNavigationOptions: defaultNavigationOptions,
        },
      ),
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          console.log(tabInfo);
          return <Icon name="add" size={25} />;
        },
      },
    },
    feed: {
      screen: createStackNavigator(
        {screen: FeedScreen},
        {
          defaultNavigationOptions: defaultNavigationOptions,
        },
      ),
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          console.log(tabInfo);
          return <Icon name="add" size={25} />;
        },
      },
    },
    profile: {
      screen: createStackNavigator(
        {screen: ProfileScreen},
        {
          defaultNavigationOptions: defaultNavigationOptions,
        },
      ),
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Icon name="add" size={25} />;
        },
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const testStackNavigator = createStackNavigator({
  tabNav: testTabNavigator,
  login: LoginScreen,
});

export default createAppContainer(testStackNavigator);
