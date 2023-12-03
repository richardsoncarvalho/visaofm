import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Linking,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TrackPlayer, {usePlaybackState, State} from 'react-native-track-player';
import _ from 'lodash';
import {
  BannerAd,
  BannerAdSize,
  useInterstitialAd,
} from '@react-native-admob/admob';
import {
  Play,
  Pause,
  Facebook,
  Instagram,
  Youtube,
  Whatsapp,
} from '../../images';
import styled from './style';
import {useTrackPlayer} from '../../hooks/useTrackPlayer';

export function Player() {
  const {adLoaded, adDismissed, show} = useInterstitialAd(
    'ca-app-pub-9221395337754411/2341171116',
  );
  const [url, setUrl] = useState<string | null>(null);
  const {state} = usePlaybackState();
  const {program} = useTrackPlayer();
  const isPlaying = state === State.Playing;
  const isLoading = state === State.Buffering;

  const playAndPause = useCallback(async () => {
    if (isPlaying) {
      await TrackPlayer.stop();
      return;
    }

    await TrackPlayer.play();
  }, [isPlaying]);

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
      if (adDismissed && !_.isEmpty(url)) {
        await Linking.openURL(url as string);
        setUrl(null);
      }
    })();
  }, [adDismissed, url]);

  return (
    <SafeAreaView style={styled.container}>
      <View style={styled.wrapper}>
        <View style={styled.wrapperTitleAndAir}>
          <View style={styled.wrapperLogo}>
            <Image
              source={{
                uri:
                  program?.photo || 'https://visao87fm.com.br/src/img/logo.png',
              }}
              resizeMode="contain"
              style={styled.logo}
            />
          </View>

          <View style={styled.wrapperContent}>
            <Text style={styled.onAir}>Ao Vivo</Text>
            <Text style={styled.title}>{program?.title}</Text>
            <Text style={styled.subtitle}>{program?.announcer}</Text>
          </View>
        </View>

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
            onPress={() =>
              redirectFromLink('https://www.instagram.com/visaofm')
            }>
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

        <TouchableOpacity
          onPress={playAndPause}
          disabled={isLoading}
          activeOpacity={0.7}
          style={[styled.playerButton, isPlaying ? styled.pause : styled.play]}>
          {isLoading ? (
            <ActivityIndicator size={32} color="#fff" />
          ) : isPlaying ? (
            <Pause />
          ) : (
            <Play />
          )}
        </TouchableOpacity>
      </View>

      <View style={styled.wrapperBanner}>
        <BannerAd
          size={BannerAdSize.ADAPTIVE_BANNER}
          unitId="ca-app-pub-9221395337754411/6963208724"
        />
      </View>
    </SafeAreaView>
  );
}
