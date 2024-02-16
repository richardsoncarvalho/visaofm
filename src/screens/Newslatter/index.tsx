import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {ptBR} from 'date-fns/locale';

import styled from './style';
import {NewsItem} from '../../components/NewsItem';
import {useQuery} from 'react-query';
import {News} from '../../models/News';
import {format} from 'date-fns';
import _ from 'lodash';
import {LargeBanner} from '../../components';
import {BannerAdSize} from 'react-native-google-mobile-ads';

export function Newslatter() {
  const theme = useColorScheme();
  const {data, isLoading} = useQuery<News[]>({
    queryKey: ['vilsonNunesNewslatter'],
    queryFn: async () =>
      await fetch(
        'https://vilsonnunes.com.br/wp-json/wp/v2/posts?per_page=30',
      ).then(response => response.json()),
  });

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <LargeBanner
          adUnitId="ca-app-pub-9221395337754411/3414889372"
          bannerSize={BannerAdSize.MEDIUM_RECTANGLE}
        />

        <Text style={{color: '#333', marginVertical: 20}}>
          Carregando notícias...
        </Text>
        
        <ActivityIndicator size={32} />
      </View>
    );
  }

  return (
    <FlatList
      style={[
        styled.wrapper,
        theme === 'dark' ? styled.bgDark : styled.bgWhite,
      ]}
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <NewsItem
          title={item.title.rendered}
          feature={item.yoast_head_json.og_image[0].url}
          published_at={format(new Date(item.date), "dd 'de' MMMM", {
            locale: ptBR,
          })}
          listeningTime={
            item.yoast_head_json.twitter_misc['Est. tempo de leitura']
          }
          link={item.link}
          og_description={item.yoast_head_json.og_description}
        />
      )}
      ItemSeparatorComponent={() => (
        <View
          style={{
            width: '100%',
            height: 1,
            marginVertical: 5,
          }}
        />
      )}
    />
  );
}
