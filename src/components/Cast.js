import {View, Text, FlatList} from 'react-native';
import React from 'react';
import PersonListItem from './PersonListItem';

const Cast = ({data}) => {
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <PersonListItem person={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
      />
    </View>
  );
};

export default Cast;
