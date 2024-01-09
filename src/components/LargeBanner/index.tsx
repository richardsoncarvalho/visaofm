import React, {memo} from 'react';
import {View} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.ADAPTIVE_BANNER
  : 'ca-app-pub-9221395337754411/6963208724';

import styled from './style';

export const LargeBanner = memo(() => {
  return (
    <View style={styled.wrapperBanner}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
    </View>
  );
});
