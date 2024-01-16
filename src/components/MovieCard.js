import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';

const MovieCard = ({movie}) => {
  const {width, height} = Dimensions.get('window');
  // http://image.tmdb.org/t/p/w500/
  return (
    <TouchableOpacity>
      <Image
      className="rounded-3xl"
        source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
      />
    </TouchableOpacity>
  );
};

export default MovieCard;
