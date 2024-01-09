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

export function Newslatter() {
  const theme = useColorScheme();
  const {data, isLoading, error} = useQuery<News[]>({
    queryKey: ['vilsonNunesNewslatter'],
    queryFn: async () =>
      await fetch(
        'https://vilsonnunes.com.br/wp-json/wp/v2/posts?per_page=30',
      ).then(response => response.json()),
  });

  if (_.isEmpty(data)) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={{uri: 'https://visao87fm.com.br/src/img/logo.png'}}
          style={{width: 160, height: 160, marginBottom: 20}}
          resizeMode="contain"
        />

        {isLoading ? (
          <>
            <Text style={{color: '#333'}}>Carregando notícias...</Text>
            <ActivityIndicator size={32} />
          </>
        ) : null}
      </View>
    );
  }

  return (
    <View
      style={[
        styled.wrapper,
        theme === 'dark' ? styled.bgDark : styled.bgWhite,
      ]}>
      <FlatList
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
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#f5f4f4',
              marginVertical: 10,
            }}
          />
        )}
      />
    </View>
  );
}
