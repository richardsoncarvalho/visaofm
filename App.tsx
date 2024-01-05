import React from 'react';

import {TrackPlayerProvider} from './src/context/TrackPlayerContext';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/routes/MainStack';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <TrackPlayerProvider>
          <StatusBar backgroundColor="#01012A" barStyle="light-content" />
          <MainStack />
        </TrackPlayerProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
