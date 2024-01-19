import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { getFavoritesState } from '../app/movieSelector';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackAndFavorite from '../components/BackAndFavorite';
import MovieListItem from '../components/MovieListItem';

const FavoritesScreen = () => {
  const favorites = useSelector(getFavoritesState());

  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      <BackAndFavorite isHeart />
      <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 30,
            paddingHorizontal: 15,
          }}
          className="flex space-y-3">
          <Text className="text-white font-semibold ml-1 mt-3">
            Favorite Length: ({favorites?.length})
          </Text>

          <View className="flex-row justify-between flex-wrap px-5">
            {favorites?.map((favorite, index) => (
              <MovieListItem searchPage key={index} movie={favorite} />
            ))}
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default FavoritesScreen