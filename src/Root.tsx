import { Composition, staticFile } from 'remotion';

import Main, { MainSchema } from './Composition/Composition';
import { Compare } from './Composition/Compare';

export const RemotionRoot: React.FC = () => {
  const cFps = 30;
  const cW = 1920;
  const cH = 1080;
  const cAudVol = 0.5;
  const cMusic = staticFile('music.mp3');
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
        durationInFrames={900}
        defaultProps={{
          audioVolume: cAudVol,
          music: cMusic,
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
          transitionDuration: 30,
          scene1Duration: 150,
          scene1Props: {
            logo: staticFile('logo.png'),
            title: 'Hello VERTEX',
          },
          scene2Duration: 180,
          scene2Props: {
            logo: staticFile('logo.png'),
            img: staticFile('media_1.jpg'),
          },
          scene3Duration: 180,
          scene3Props: {
            logo: staticFile('logo.png'),
            img: staticFile('media_2.jpg'),
          },
          scene4Duration: 180,
          scene4Props: {
            logo: staticFile('logo.png'),
            img: staticFile('media_3.jpg'),
          },
          scene5Duration: 180,
          scene5Props: {
            logo: staticFile('logo.png'),
            img: staticFile('media_4.jpg'),
          },
          scene6Duration: 180,
          scene6Props: {
            logo: staticFile('logo.png'),
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
        durationInFrames={900}
        defaultProps={{
          audioVolume: cAudVol,
          music: cMusic,
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
          transitionDuration: 30,
          scene1Duration: 150,
          scene1Props: {
            logo: staticFile('logo.png'),
            title: 'Hello VERTEX',
          },
          scene2Duration: 180,
          scene2Props: {
            logo: staticFile('logo.png'),
            img: staticFile('media_1.jpg'),
          },
          scene3Duration: 180,
          scene3Props: {
            logo: staticFile('logo.png'),
            img: staticFile('media_2.jpg'),
          },
          scene4Duration: 180,
          scene4Props: {
            logo: staticFile('logo.png'),
            img: staticFile('media_3.jpg'),
          },
          scene5Duration: 180,
          scene5Props: {
            logo: staticFile('logo.png'),
            img: staticFile('media_4.jpg'),
          },
          scene6Duration: 180,
          scene6Props: {
            logo: staticFile('logo.png'),
          },
        }}
      />
    </>
  );
};
