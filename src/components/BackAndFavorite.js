import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {setFavoritesState} from '../app/movieSlice';
import {useDispatch, useSelector} from 'react-redux';
import {getFavoritesState} from '../app/movieSelector';
import {useRoute} from '@react-navigation/native';

const BackAndFavorite = ({isAbsolute, movie, isHeart}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const favorites = useSelector(getFavoritesState());

  const color = favorites.find((item) => item.id === movie?.id) ? "#eab308" : "#fff";

  return (
    <SafeAreaView
      className={`flex-row justify-between items-center mx-4 z-20 ${
        isAbsolute && 'absolute w-96 '
      }`}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="p-1 rounded-xl"
        style={{backgroundColor: '#eab308'}}>
        <Icon name="chevron-left" size={30} color="#fff" />
      </TouchableOpacity>
      {!isHeart && (
        <TouchableOpacity onPress={() => dispatch(setFavoritesState(movie))}>
          <Icon name="heart" size={30} color={color} />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default BackAndFavorite;
