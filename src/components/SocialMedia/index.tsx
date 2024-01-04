import React, {useCallback, useEffect, useState} from 'react';
import {Linking, TouchableOpacity, View} from 'react-native';
import styled from './style';
import {Facebook, Instagram, Youtube, Whatsapp} from '../../images';
import {useInterstitialAd} from '@react-native-admob/admob';
import {isEmpty} from 'lodash';

export function SocialMedia() {
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

  return (
    <View style={styled.wrapperSocialMedia}>
      <TouchableOpacity
        style={[styled.buttonSocial, styled.facebook]}
        onPress={() =>
          redirectFromLink(
            'https://www.facebook.com/profile.php?id=100063614072033',
          )
        }>
        <Facebook />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styled.buttonSocial, styled.instagram]}
        onPress={() => redirectFromLink('https://www.instagram.com/visaofm')}>
        <Instagram />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styled.buttonSocial, styled.youtube]}
        onPress={() =>
          redirectFromLink('https://www.youtube.com/@visao87fm11')
        }>
        <Youtube />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styled.buttonSocial, styled.whatsapp]}
        onPress={() =>
          redirectFromLink(
            'https://api.whatsapp.com/send?phone=77999919742&text=*Ol%C3%A1*,%20estou%20ouvindo%20o%20programa%20diretamente%20do%20*Aplicativo*!',
          )
        }>
        <Whatsapp />
      </TouchableOpacity>
    </View>
  );
}
