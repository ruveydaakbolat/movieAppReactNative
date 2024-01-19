import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '../navigation/types';
import {fallbackMoviePoster} from '../api';

const MovieListItem = ({movie, searchPage}) => {
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('window');

  return (
    <TouchableOpacity className={`${searchPage && 'mb-4'}`}
      onPress={() => navigation.navigate(AppScreens.Movie, {id: movie.id})}>
      <View className="mr-4 space-y-2">
        {movie.poster_path ? (
          <Image
            className="rounded-3xl"
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            style={{
              width: width * 0.33,
              height: height * 0.22,
            }}
          />
        ) : (
          <Image
            className="rounded-3xl"
            source={{
              uri: fallbackMoviePoster,
            }}
            style={{
              width: width * 0.33,
              height: height * 0.22,
            }}
          />
        )}

        {!searchPage && (
          <Text className="text-neutral-300 ml-1">
            {movie.title.length > 14
              ? movie.title.slice(0, 14) + '...'
              : movie.title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MovieListItem;
