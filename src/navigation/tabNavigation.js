import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppScreens} from './types';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import {StackNavigation} from './stackNavigation';
import Icon from 'react-native-vector-icons/Fontisto';

export const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName={AppScreens.Home} screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#d9d9d9',
        tabBarInactiveTintColor: '#8c8c8c',
        tabBarStyle: {
            backgroundColor: '#404040',
            paddingVertical: 13,
        }
    }}>
      <Tab.Screen
      options={
        {
            tabBarIcon: ({color, size}) => (
                <Icon name="home" color={color} size={size} />
            )
        }
      }
        name={AppScreens.Home}
        component={StackNavigation}></Tab.Screen>
      <Tab.Screen
      options={
        {
            tabBarIcon: ({color, size}) => (
                <Icon name="heart" color={color} size={size} />
            )
        }
      }
        name={AppScreens.Favorites}
        component={FavoritesScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};
