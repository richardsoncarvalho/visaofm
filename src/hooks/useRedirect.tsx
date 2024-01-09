import {useCallback, useEffect, useState} from 'react';
import {TestIds, useInterstitialAd} from 'react-native-google-mobile-ads';
import _ from 'lodash';
import {Linking} from 'react-native';

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-9221395337754411/2341171116';

export function useRedirect() {
  const {isLoaded, isClosed, load, show} = useInterstitialAd(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
  });
  const [url, setUrl] = useState<string | null>(null);

  const redirectFromLink = useCallback(
    async (link: string) => {
      if (isLoaded) {
        show();
        setUrl(link);
        return;
      }
      await Linking.openURL(link);
      load();
    },
    [isLoaded, show, load],
  );

  useEffect(() => {
    if (!_.isEmpty(url) && isClosed) {
      Linking.openURL(url);
      setUrl(null);
    }
  }, [url, isClosed]);

  useEffect(() => {
    load();
  }, [load]);

  return {redirectFromLink};
}
