import {useCallback} from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import {Pause, Play} from '../../images';

import styled from './style';

export function PlayerAndPauseButton() {
  const {state} = usePlaybackState();
  const isPlaying = state === State.Playing;
  const isLoading = state === State.Buffering;

  const playAndPause = useCallback(async () => {
    if (isPlaying) {
      await TrackPlayer.stop();
      return;
    }

    await TrackPlayer.play();
  }, [isPlaying]);

  return (
    <TouchableOpacity
      onPress={playAndPause}
      disabled={isLoading}
      activeOpacity={0.7}
      style={[styled.playerButton, isPlaying ? styled.pause : styled.play]}>
      {isLoading ? (
        <ActivityIndicator size={32} color="#fff" />
      ) : isPlaying ? (
        <Pause />
      ) : (
        <Play />
      )}
    </TouchableOpacity>
  );
}
