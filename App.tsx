import React from 'react';

import {Player} from './src/screens/Player';
import {TrackPlayerProvider} from './src/context/TrackPlayerContext';

export default function App() {
  return (
    <TrackPlayerProvider>
      <Player />
    </TrackPlayerProvider>
  );
}
