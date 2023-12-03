import {isWithinInterval, parse} from 'date-fns';
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

export function TrackPlayerProvider({children}: PropsWithChildren) {
  const {state} = usePlaybackState();
  const [program, setProgram] = useState<Program>({
    announcer: '',
    end: '',
    start: '',
    title: '',
  });

  const initialize = useCallback(async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
      },
      capabilities: [Capability.Play, Capability.Stop],
      compactCapabilities: [Capability.Play, Capability.Stop],
    });
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
      try {
        const scredule = await fetch(
          'https://visao87fm.com.br/programacao.json',
        );
        const response = (await scredule.json()) as {[key: number]: Program[]};
        const currentDate = utcToZonedTime(new Date(), 'America/Sao_Paulo');
        const currentProgram = response[currentDate.getDay()].find(schedule => {
          const programStart = parse(schedule.start, 'HH:mm', currentDate);
          const programEnd = parse(schedule.end, 'HH:mm', currentDate);

          return isWithinInterval(currentDate, {
            start: programStart,
            end: programEnd,
          });
        }) as Program;

        setProgram(currentProgram);
      } catch (error) {
        setProgram({
          title: 'Programação Musical Automática',
          announcer: 'Programação',
          start: '00:00',
          end: '05:00',
        });
      }
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
