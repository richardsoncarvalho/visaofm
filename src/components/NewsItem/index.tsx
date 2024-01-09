import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {useRedirect} from '../../hooks/useRedirect';

type NewsItemProps = {
  feature: string;
  title: string;
  published_at: string;
  listeningTime: string;
  link: string;
};

export function NewsItem({
  title,
  feature,
  published_at,
  listeningTime,
  link,
}: NewsItemProps) {
  const {redirectFromLink} = useRedirect();
  const theme = useColorScheme();

  return (
    <TouchableOpacity
      onPress={() => redirectFromLink(link)}
      activeOpacity={0.7}
      style={{
        flexDirection: 'row',
        gap: 10,
        backgroundColor: theme === 'dark' ? '#202020' : '#fff',
        padding: 10,
        borderRadius: 10,
      }}>
      <View style={{width: 80, minHeight: 100}}>
        <Image
          source={{
            uri: feature,
          }}
          resizeMode="cover"
          style={{flex: 1, borderRadius: 10, overflow: 'hidden'}}
        />
      </View>

      <View style={{flex: 1, gap: 10}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: theme === 'dark' ? '#fff' : '#202020',
          }}>
          {title}
        </Text>

        <Text
          style={{
            fontSize: 12,
            color: theme === 'dark' ? '#bdbdbd' : '#5e5e5e',
          }}>
          {published_at} - {listeningTime}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
