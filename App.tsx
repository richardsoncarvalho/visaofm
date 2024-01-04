import React from 'react';

import {TrackPlayerProvider} from './src/context/TrackPlayerContext';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/routes/MainStack';

export default function App() {
  return (
    <NavigationContainer>
      <TrackPlayerProvider>
        <StatusBar backgroundColor="#01012A" barStyle="light-content" />
        <MainStack />
      </TrackPlayerProvider>
    </NavigationContainer>
  );
}
