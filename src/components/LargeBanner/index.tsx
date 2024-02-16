import React, {memo} from 'react';
import {View} from 'react-native';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';

import styled from './style';

type LargeBannerProps = {
  adUnitId?: string;
  bannerSize?: BannerAdSize;
  height?: number;
};

export const LargeBanner = memo(
  ({
    adUnitId = 'ca-app-pub-9221395337754411/6963208724',
    bannerSize = BannerAdSize.ANCHORED_ADAPTIVE_BANNER,
    height,
  }: LargeBannerProps) => {
    return (
      <View style={[styled.wrapperBanner, {height}]}>
        <BannerAd unitId={adUnitId} size={bannerSize} />
      </View>
    );
  },
);
