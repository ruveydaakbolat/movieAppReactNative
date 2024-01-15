import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppScreens} from './types';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';

export const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={AppScreens.Home}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={AppScreens.Home} component={HomeScreen} />
      <Stack.Screen name={AppScreens.Movie} component={MovieScreen} />
      <Stack.Screen name={AppScreens.Person} component={PersonScreen} />
      <Stack.Screen name={AppScreens.Search} component={SearchScreen} />
    </Stack.Navigator>
  );
};
