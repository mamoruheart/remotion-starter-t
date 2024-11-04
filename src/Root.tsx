import { Composition, staticFile } from 'remotion';

import Main, { MainSchema } from './Composition/Composition';
import { Compare } from './Composition/Compare';

export const RemotionRoot: React.FC = () => {
  const cFps = 30;
  const sceneDurationsInSec = {
    scene1: 5,
    scene2: 4,
    scene3: 6,
    scene4: 4,
    scene5: 6,
    scene6: 3,
  };
  const cW = 1920;
  const cH = 1080;
  const cAudVol = 0.5;
  const colorsProp = {
    background: '#000000',
    backgroundText: '#FFFFFF',
    black: '#000000',
    white: '#FFFFFF',
    primary: '#f00',
    primaryText: '#FFFFFF',
    secondary: '#5118DB',
    secondaryText: '#f00',
    accent: '#FFFF08',
    accentText: '#f00',
  };
  const cBgType = 'crosses';
  const cBgBackground = 'background';
  const cBgStroke = 'black';
  const cFontPrimary = 'Montserrat';
  const cFontSecondary = 'Abel';
  const cTransDuration = 30;

  return (
    <>
      {/* VERTEX */}
      <Composition
        id="Vertex"
        component={Main}
        schema={MainSchema}
        fps={cFps}
        width={cW}
        height={cH}
        durationInFrames={
          cFps *
          (sceneDurationsInSec.scene1 +
            sceneDurationsInSec.scene2 +
            sceneDurationsInSec.scene3 +
            sceneDurationsInSec.scene4 +
            sceneDurationsInSec.scene5 +
            sceneDurationsInSec.scene6)
        }
        defaultProps={{
          audioVolume: cAudVol,
          colors: colorsProp,
          background: {
            type: cBgType,
            background: cBgBackground,
            stroke: cBgStroke,
          },
          fonts: {
            primary: cFontPrimary,
            secondary: cFontSecondary,
          },
          transitionDuration: cTransDuration,
          scene1Duration: cFps * sceneDurationsInSec.scene1,
          scene1Props: {
            logo: staticFile('logo_ama.png'),
            title: 'Hello VERTEX',
          },
          scene2Duration: cFps * sceneDurationsInSec.scene2,
          scene2Props: {
            logo: staticFile('logo_ama.png'),
            img: staticFile('media_1.jpg'),
          },
          scene3Duration: cFps * sceneDurationsInSec.scene3,
          scene3Props: {
            logo: staticFile('logo_ama.png'),
            img: staticFile('media_2.jpg'),
          },
          scene4Duration: cFps * sceneDurationsInSec.scene4,
          scene4Props: {
            logo: staticFile('logo_ama.png'),
            img: staticFile('media_3.jpg'),
          },
          scene5Duration: cFps * sceneDurationsInSec.scene5,
          scene5Props: {
            logo: staticFile('logo_ama.png'),
            img: staticFile('media_4.jpg'),
          },
          scene6Duration: cFps * sceneDurationsInSec.scene6,
          scene6Props: {
            logo: staticFile('logo_ama.png'),
          },
        }}
      />
      {/* COMPARE */}
      <Composition
        id="Compare"
        component={Compare}
        schema={MainSchema}
        fps={cFps}
        width={cW * 2}
        height={cH}
        durationInFrames={
          cFps *
          (sceneDurationsInSec.scene1 +
            sceneDurationsInSec.scene2 +
            sceneDurationsInSec.scene3 +
            sceneDurationsInSec.scene4 +
            sceneDurationsInSec.scene5 +
            sceneDurationsInSec.scene6)
        }
        defaultProps={{
          audioVolume: cAudVol,
          colors: colorsProp,
          background: {
            type: cBgType,
            background: cBgBackground,
            stroke: cBgStroke,
          },
          fonts: {
            primary: cFontPrimary,
            secondary: cFontSecondary,
          },
          transitionDuration: cTransDuration,
          scene1Duration: cFps * sceneDurationsInSec.scene1,
          scene1Props: {
            logo: staticFile('logo_ama.png'),
            title: 'Hello VERTEX',
          },
          scene2Duration: cFps * sceneDurationsInSec.scene2,
          scene2Props: {
            logo: staticFile('logo_ama.png'),
            img: staticFile('media_1.jpg'),
          },
          scene3Duration: cFps * sceneDurationsInSec.scene3,
          scene3Props: {
            logo: staticFile('logo_ama.png'),
            img: staticFile('media_2.jpg'),
          },
          scene4Duration: cFps * sceneDurationsInSec.scene4,
          scene4Props: {
            logo: staticFile('logo_ama.png'),
            img: staticFile('media_3.jpg'),
          },
          scene5Duration: cFps * sceneDurationsInSec.scene5,
          scene5Props: {
            logo: staticFile('logo_ama.png'),
            img: staticFile('media_4.jpg'),
          },
          scene6Duration: cFps * sceneDurationsInSec.scene6,
          scene6Props: {
            logo: staticFile('logo_ama.png'),
          },
        }}
      />
    </>
  );
};
