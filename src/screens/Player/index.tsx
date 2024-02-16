import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {
  SocialMedia,
  HeaderProgram,
  PlayerAndPauseButton,
  LargeBanner,
} from '../../components';
import styled from './style';
import { BannerAdSize } from 'react-native-google-mobile-ads';

export function Player() {
  return (
    <SafeAreaView style={styled.container}>
      <View style={styled.wrapper}>
        <HeaderProgram />
        <LargeBanner adUnitId='ca-app-pub-9221395337754411/3414889372' bannerSize={BannerAdSize.LARGE_BANNER} height={100} />
        <SocialMedia />
        <PlayerAndPauseButton />
      </View>
    </SafeAreaView>
  );
}
