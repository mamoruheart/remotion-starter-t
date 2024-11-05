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
    /**
     * total sum should be 30...
     */
  };
  const cW = 1920;
  const cH = 1080;
  const cAudVol = 0.5;
  const colorsProp = {
    primary: '#ff0000',
    primaryText: '#ffffff',
    secondary: '#5118db',
    secondaryText: '#ff0000',
    accent: '#ffff08',
    accentText: '#ff0000',
    background: '#076cc9',
    backgroundText: '#ffffff',
    black: '#000000',
    white: '#ffffff',
    amaRed: '#bd0d2d',
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
            title: 'Celebrate 100 years of rights, riding, and racing!',
          },
          scene2Duration: cFps * sceneDurationsInSec.scene2,
          scene2Props: {
            logo: staticFile('logo_ama.png'),
            img: staticFile('media_1.jpg'),
            title:
              'Be part of the thousands riders who trust us to safeguard the future of motorcycling',
          },
          scene3Duration: cFps * sceneDurationsInSec.scene3,
          scene3Props: {
            logo: staticFile('logo_ama.png'),
            img: staticFile('media_2.jpg'),
            title1: 'Your right to ride is under threat.',
            title2: 'Without support, the future of motorcycling may be at risk',
          },
          scene4Duration: cFps * sceneDurationsInSec.scene4,
          scene4Props: {
            logo: staticFile('logo_ama.png'),
            img: staticFile('media_3.jpg'),
            title: 'Join us to protect your riding freedom and enjoy exclusive benefits',
          },
          scene5Duration: cFps * sceneDurationsInSec.scene5,
          scene5Props: {
            logo: staticFile('logo_ama.png'),
            img: staticFile('media_4.jpg'),
            title:
              'Get access to AMA-sanctioned tours, races, and rallies, plus discounts and American Motorcyclist magazine',
          },
          scene6Duration: cFps * sceneDurationsInSec.scene6,
          scene6Props: {
            logo: staticFile('logo_ama.png'),
            title1: 'Join the AMA today!',
            title2: '(800) AMA-JOIN',
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
            title: 'Celebrate 100 years of rights, riding, and racing!',
          },
          scene2Duration: cFps * sceneDurationsInSec.scene2,
          scene2Props: {
            logo: staticFile('logo_ama.png'),
            img: staticFile('media_1.jpg'),
            title:
              'Be part of the thousands riders who trust us to safeguard the future of motorcycling',
          },
          scene3Duration: cFps * sceneDurationsInSec.scene3,
          scene3Props: {
            logo: staticFile('logo_ama.png'),
            img: staticFile('media_2.jpg'),
            title1: 'Your right to ride is under threat.',
            title2: 'Without support, the future of motorcycling may be at risk',
          },
          scene4Duration: cFps * sceneDurationsInSec.scene4,
          scene4Props: {
            logo: staticFile('logo_ama.png'),
            img: staticFile('media_3.jpg'),
            title: 'Join us to protect your riding freedom and enjoy exclusive benefits',
          },
          scene5Duration: cFps * sceneDurationsInSec.scene5,
          scene5Props: {
            logo: staticFile('logo_ama.png'),
            img: staticFile('media_4.jpg'),
            title:
              'Get access to AMA-sanctioned tours, races, and rallies, plus discounts and American Motorcyclist magazine',
          },
          scene6Duration: cFps * sceneDurationsInSec.scene6,
          scene6Props: {
            logo: staticFile('logo_ama.png'),
            title1: 'Join the AMA today!',
            title2: '(800) AMA-JOIN',
          },
        }}
      />
    </>
  );
};
