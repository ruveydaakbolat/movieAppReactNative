import {View, Text, Image} from 'react-native';
import React from 'react';

const Logo = () => {
  return (
    <Image
      source={{
        uri: 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
      }}
      style={{width: 200, height: 50}}
    />
  );
};

export default Logo;
