import {useContext} from 'react';
import {TrackPlayerContext} from '../context/TrackPlayerContext';

export function useTrackPlayer() {
  const context = useContext(TrackPlayerContext);

  if (!context) {
    throw new Error('TrackPlayerContext not found');
  }

  return context;
}
