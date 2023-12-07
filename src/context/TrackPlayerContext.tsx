import {parse} from 'date-fns';
import {utcToZonedTime} from 'date-fns-tz';
import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  State,
  usePlaybackState,
} from 'react-native-track-player';

const track = {
  url: 'https://on.sucesso.fm/visao',
  artwork: 'https://visao87fm.com.br/src/img/logo.png',
};

type Program = {
  announcer: string;
  end: string;
  start: string;
  title: string;
  photo?: string;
};

export const TrackPlayerContext = createContext<{program: Program}>({
  program: {
    announcer: '',
    end: '',
    start: '',
    title: '',
  },
});

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

export function TrackPlayerProvider({children}: PropsWithChildren) {
  const {state} = usePlaybackState();
  const [program, setProgram] = useState<Program>({
    announcer: '',
    end: '',
    start: '',
    title: '',
  });

  const initialize = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await initialize();
      } catch (error: {code: string; message: string}) {
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
  }, [initialize]);

  useEffect(() => {
    (async () => {
      const scredule = await fetch('https://visao87fm.com.br/programacao.json');
      const response = (await scredule.json()) as {[key: number]: Program[]};
      const currentDate = utcToZonedTime(new Date(), 'America/Sao_Paulo');

      const currentProgram = response[currentDate.getDay()].find(schedule => {
        const programStart = parse(schedule.start, 'HH:mm', currentDate);
        const programEnd = parse(schedule.end, 'HH:mm', currentDate);

        return (
          currentDate >= programStart &&
          currentDate <=
            (programEnd.getHours() === 0
              ? parse('23:59', 'HH:mm', currentDate)
              : programEnd)
        );
      }) as Program;

      setProgram(currentProgram);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (state !== State.Playing) {
        return;
      }

      await TrackPlayer.updateMetadataForTrack(0, {
        artist: program?.announcer,
        title: program?.title,
      });
    })();
  }, [program?.announcer, program?.title, state]);

  return (
    <TrackPlayerContext.Provider value={{program}}>
      {children}
    </TrackPlayerContext.Provider>
  );
}
