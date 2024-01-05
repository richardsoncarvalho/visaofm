import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from './style';
import {Facebook, Instagram, Youtube, Whatsapp} from '../../images';
import {useRedirect} from '../../hooks/useRedirect';

export function SocialMedia() {
  const {redirectFromLink} = useRedirect();

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
