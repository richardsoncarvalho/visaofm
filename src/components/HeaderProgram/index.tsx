import React from 'react';
import {Image, Text, View} from 'react-native';
import {useTrackPlayer} from '../../hooks/useTrackPlayer';

import styled from './style';

export function HeaderProgram() {
  const {program} = useTrackPlayer();

  return (
    <View style={styled.wrapperTitleAndAir}>
      <View style={styled.wrapperLogo}>
        <Image
          source={{
            uri: program?.photo || 'https://visao87fm.com.br/src/img/logo.png',
          }}
          resizeMode="contain"
          style={styled.logo}
        />
      </View>

      <View style={styled.wrapperContent}>
        <Text style={styled.onAir}>Ao Vivo</Text>
        <Text style={styled.title}>{program?.title}</Text>
        <Text style={styled.subtitle}>{program?.announcer}</Text>
        <Text style={styled.subtitle}>
          dás {program?.start} ás {program?.end}
        </Text>
      </View>
    </View>
  );
}
