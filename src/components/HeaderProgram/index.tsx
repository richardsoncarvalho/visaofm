import React from 'react';
import {Image, View} from 'react-native';

import styled from './style';

export function HeaderProgram() {
  return (
    <View style={styled.wrapperTitleAndAir}>
      <View style={styled.wrapperLogo}>
        <Image
          source={{
            uri: 'https://visao87fm.com.br/src/img/logo.png',
          }}
          resizeMode="contain"
          style={styled.logo}
        />
      </View>
    </View>
  );
}
