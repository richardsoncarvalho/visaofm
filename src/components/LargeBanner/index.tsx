import React, {useRef} from 'react';
import {View} from 'react-native';
import {BannerAd, BannerAdSize} from '@react-native-admob/admob';

import styled from './style';

export function LargeBanner() {
  const bannerRef = useRef<BannerAd | null>(null);

  return (
    <View style={styled.wrapperBanner}>
      <BannerAd
        size={BannerAdSize.LARGE_BANNER}
        unitId="ca-app-pub-9221395337754411/6963208724"
        onAdFailedToLoad={() => bannerRef?.current?.loadAd()}
        ref={bannerRef}
      />
    </View>
  );
}
