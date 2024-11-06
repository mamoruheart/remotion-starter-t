import { AbsoluteFill, Audio, staticFile, useVideoConfig, Sequence } from 'remotion';
import { TransitionSeries, linearTiming } from '@remotion/transitions';
import { z } from 'zod';

import Scene1, { scene1Schema } from './Scene1';
import Scene2, { scene2Schema } from './Scene2';
import Scene3, { scene3Schema } from './Scene3';
import Scene4, { scene4Schema } from './Scene4';
import Scene5, { scene5Schema } from './Scene5';
import Scene6, { scene6Schema } from './Scene6';
import { LoadFonts } from '../lib/LoadFonts';
import { getCSSVariables } from '../lib/helpers';
import { HEIGHT, WIDTH } from '../lib/consts';
import { Colors, Fonts } from '../types';
import { BackgroundProps } from '../backgrounds';
import { customCenterPresentation } from '../transitions/CenterPresentation';
import { customL2RPresentation } from '../transitions/Left2RightPresentation';
import { customR2LPresentation } from '../transitions/Right2LeftPresentation';
import { customPresentation } from '../transitions/CustomPresentation';

export const MainSchema = z.object({
  audioVolume: z.number(),
  colors: Colors,
  fonts: Fonts,
  background: BackgroundProps,
  transitionDuration: z.number(),
  scene1Duration: z.number(),
  scene1Props: scene1Schema,
  scene2Duration: z.number(),
  scene2Props: scene2Schema,
  scene3Duration: z.number(),
  scene3Props: scene3Schema,
  scene4Duration: z.number(),
  scene4Props: scene4Schema,
  scene5Duration: z.number(),
  scene5Props: scene5Schema,
  scene6Duration: z.number(),
  scene6Props: scene6Schema,
});

type MainProps = z.infer<typeof MainSchema>;

const Main: React.FC<MainProps> = ({
  audioVolume,
  transitionDuration,
  colors,
  background,
  fonts,
  scene1Duration,
  scene1Props,
  scene2Duration,
  scene2Props,
  scene3Duration,
  scene3Props,
  scene4Duration,
  scene4Props,
  scene5Duration,
  scene5Props,
  scene6Duration,
  scene6Props,
}) => {
  const { id } = useVideoConfig();
  // You work will be mainly with the Scenes files
  //----------------------------------------------
  // Work in this File:
  // adapt the transitions to an existing one or to your new one
  //----------------------------------------------
  // If you want to use a different component than a <TransitionSeries>
  // then you'll have to talk to me why it's necessary.

  return (
    <LoadFonts fonts={fonts}>
      {/* Audio sequences for background music */}
      <Sequence from={0} durationInFrames={scene1Duration}>
        <Audio src={staticFile('announce_1.mp3')} volume={audioVolume} />
      </Sequence>
      <Sequence from={scene1Duration} durationInFrames={scene2Duration}>
        <Audio src={staticFile('announce_2.mp3')} volume={audioVolume} />
      </Sequence>
      <Sequence from={scene1Duration + scene2Duration} durationInFrames={scene3Duration}>
        <Audio src={staticFile('announce_3.mp3')} volume={audioVolume} />
      </Sequence>
      <Sequence
        from={scene1Duration + scene2Duration + scene3Duration}
        durationInFrames={scene4Duration}
      >
        <Audio src={staticFile('announce_4.mp3')} volume={audioVolume} />
      </Sequence>
      <Sequence
        from={scene1Duration + scene2Duration + scene3Duration + scene4Duration}
        durationInFrames={scene5Duration}
      >
        <Audio src={staticFile('announce_5.mp3')} volume={audioVolume} />
      </Sequence>
      <Sequence
        from={scene1Duration + scene2Duration + scene3Duration + scene4Duration + scene5Duration}
        durationInFrames={scene6Duration}
      >
        <Audio src={staticFile('announce_6.mp3')} volume={audioVolume} />
      </Sequence>

      {/* Visual transition composition */}
      <AbsoluteFill
        id={id}
        style={{
          background: 'black',
          ...getCSSVariables({
            colors,
            fonts,
            roundness: 1,
          }),
        }}
      >
        <TransitionSeries>
          {/* Scene 1 */}
          <TransitionSeries.Sequence offset={0} durationInFrames={scene1Duration}>
            <Scene1 {...scene1Props} background={background} />
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition
            presentation={customL2RPresentation({
              height: HEIGHT,
              width: WIDTH,
            })}
            timing={linearTiming({
              durationInFrames: transitionDuration,
            })}
          />
          {/* Scene 2 */}
          <TransitionSeries.Sequence offset={0} durationInFrames={scene2Duration + 30}>
            <Scene2 {...scene2Props} background={background} />
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition
            presentation={customR2LPresentation({
              height: HEIGHT,
              width: WIDTH,
            })}
            timing={linearTiming({
              durationInFrames: transitionDuration,
            })}
          />
          {/* Scene 3 */}
          <TransitionSeries.Sequence offset={0} durationInFrames={scene3Duration + 20}>
            <Scene3 {...scene3Props} background={background} />
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition
            presentation={customCenterPresentation({
              height: HEIGHT,
              width: WIDTH,
            })}
            timing={linearTiming({ durationInFrames: transitionDuration })}
          />
          {/* Scene 4 */}
          <TransitionSeries.Sequence offset={0} durationInFrames={scene4Duration + 50}>
            <Scene4 {...scene4Props} background={background} />
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition
            presentation={customL2RPresentation({
              height: HEIGHT,
              width: WIDTH,
            })}
            timing={linearTiming({
              durationInFrames: transitionDuration,
            })}
          />
          {/* Scene 5 */}
          <TransitionSeries.Sequence offset={0} durationInFrames={scene5Duration + 50}>
            <Scene5 {...scene5Props} background={background} />
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition
            presentation={customPresentation({
              width: 1920,
              height: 1080,
              rotation: 45,
            })}
            timing={linearTiming({
              durationInFrames: transitionDuration,
            })}
          />
          {/* Scene 6 */}
          <TransitionSeries.Sequence offset={0} durationInFrames={scene6Duration + 30}>
            <Scene6 {...scene6Props} background={background} />
          </TransitionSeries.Sequence>
        </TransitionSeries>
      </AbsoluteFill>
    </LoadFonts>
  );
};

export default Main;
