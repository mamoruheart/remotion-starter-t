import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { AnimatedText } from 'remotion-animate-text';
import { z } from 'zod';

import Logo2 from '../components/Logo2';
import Image3 from '../components/Image3';
import { Background } from '../components/Background';
import { BackgroundProps } from '../backgrounds';
import { colorVar } from '../lib/helpers';

export const scene3Schema = z.object({
  logo: z.string(),
  img: z.string(),
  title1: z.string(),
  title2: z.string(),
});

type Scene3Props = z.infer<typeof scene3Schema> & { background: BackgroundProps };

const Scene3: React.FC<Scene3Props> = (props) => {
  const frame = useCurrentFrame();

  const animation1 = {
    delimiter: '',
    opacity: [Math.random(), 1],
    x: [1, 0],
    y: [1, 0],
    scale: [0, 1],
    rotate: [Math.abs(90 - frame) % 45, 0],
    durations: [50],
    refRange: [0, props.title1.length],
  };
  const animation2 = {
    delimiter: '',
    opacity: [Math.random(), 1],
    x: [1, 0],
    y: [1, 0],
    scale: [0, 1],
    rotate: [Math.abs(90 - frame) % 45, 0],
    durations: [50],
    refRange: [0, props.title2.length],
  };

  return (
    <AbsoluteFill>
      <Background {...props.background} />

      <div
        style={{
          display: 'flex',
          margin: '100px',
          paddingTop: '100px',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '0rem',
            right: '0rem',
          }}
        >
          <Logo2 logo={props.logo} radius={100} direction="from-right" />
        </div>

        <Image3 img={props.img} radius={400} strokeColor={colorVar('amaRed')} strokeWidth={50} />

        <h2
          style={{
            color: 'white',
            fontSize: '6rem',
            lineHeight: '6rem',
            zIndex: 9,
            width: '48%',
            margin: 0,
            textAlign: 'right',
            paddingTop: '8rem',
          }}
        >
          <AnimatedText duration={60} animation={animation1}>
            {props.title1}
          </AnimatedText>
          <br />
          <AnimatedText duration={60} animation={animation2}>
            {props.title2}
          </AnimatedText>
        </h2>
      </div>
    </AbsoluteFill>
  );
};

export default Scene3;
