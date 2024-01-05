import {useCallback, useEffect, useState} from 'react';
import {useInterstitialAd} from '@react-native-admob/admob';
import {isEmpty} from 'lodash';
import {Linking} from 'react-native';

export function useRedirect() {
  const {adLoaded, adDismissed, show} = useInterstitialAd(
    'ca-app-pub-9221395337754411/2341171116',
  );
  const [url, setUrl] = useState<string | null>(null);

  const redirectFromLink = useCallback(
    async (link: string) => {
      if (adLoaded) {
        show();
        setUrl(link);
        return;
      }

      await Linking.openURL(link);
    },
    [adLoaded, show],
  );

  useEffect(() => {
    (async () => {
      if (adDismissed && !isEmpty(url)) {
        await Linking.openURL(url as string);
        setUrl(null);
      }
    })();
  }, [adDismissed, url]);

  return {redirectFromLink};
}
