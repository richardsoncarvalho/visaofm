import React from 'react';

import {Player} from './src/screens/Player';
import {TrackPlayerProvider} from './src/context/TrackPlayerContext';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <TrackPlayerProvider>
      <StatusBar backgroundColor="#01012A" barStyle="light-content" />
      <Player />
    </TrackPlayerProvider>
  );
}
