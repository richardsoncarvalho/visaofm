import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {
  SocialMedia,
  HeaderProgram,
  PlayerAndPauseButton,
} from '../../components';
import styled from './style';

export function Player() {
  return (
    <SafeAreaView style={styled.container}>
      <View style={styled.wrapper}>
        <HeaderProgram />
        <SocialMedia />
        <PlayerAndPauseButton />
      </View>
    </SafeAreaView>
  );
}
