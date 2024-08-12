import React from 'react';

import {TrackPlayerProvider} from './src/context/TrackPlayerContext';
import {StatusBar} from 'react-native';
import {Player} from './src/screens/Player';
import {LargeBanner} from './src/components';

export default function App() {
  return (
    <TrackPlayerProvider>
      <StatusBar backgroundColor="#01012A" barStyle="light-content" />
      <Player />
      <LargeBanner />
    </TrackPlayerProvider>
  );
}
