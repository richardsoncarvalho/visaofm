import React, {PropsWithChildren, createContext, useEffect} from 'react';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
} from 'react-native-track-player';

const track = {
  url: 'https://on.sucesso.fm/visao',
  artwork: 'https://visao87fm.com.br/src/img/logo.png',
};

export const TrackPlayerContext = createContext({});

const setupPlayer = async (
  options: Parameters<typeof TrackPlayer.setupPlayer>[0],
) => {
  const setup = async () => {
    try {
      await TrackPlayer.setupPlayer(options);
    } catch (error) {
      return (error as Error & {code?: string}).code;
    }
  };
  while ((await setup()) === 'android_cannot_setup_player_in_background') {
    await new Promise<void>(resolve => setTimeout(resolve, 1));
  }
};

const initialize = async () => {
  await setupPlayer({
    autoHandleInterruptions: true,
  });
  await TrackPlayer.updateOptions({
    android: {
      appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
    },
    capabilities: [Capability.Play, Capability.Stop],
    compactCapabilities: [Capability.Play, Capability.Stop],
  });
  await TrackPlayer.reset();
  await TrackPlayer.add([track]);
  await TrackPlayer.play();
};

export function TrackPlayerProvider({children}: PropsWithChildren) {
  useEffect(() => {
    (async () => {
      try {
        await initialize();
      } catch (error) {
        if (error?.code === 'player_not_initialized') {
          await initialize();
          return;
        }

        if (error?.code === 'player_already_initialized') {
          await TrackPlayer.reset();
          await TrackPlayer.add([track]);
          await TrackPlayer.play();
          return;
        }
      }
    })();
  }, []);

  return (
    <TrackPlayerContext.Provider value={{}}>
      {children}
    </TrackPlayerContext.Provider>
  );
}
