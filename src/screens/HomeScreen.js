import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Logo from '../components/Logo'
import {useNavigation} from '@react-navigation/native';
import { AppScreens } from '../navigation/types';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView>
        <StatusBar barStyle='light-content' />
        <View>
          <Icon name='menuunfold' size={30} color="#fff" />
          <Logo />
          <TouchableOpacity onPress={() => navigation.navigate(AppScreens.Search)}>
            <Icon name="search1" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen