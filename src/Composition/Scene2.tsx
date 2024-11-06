import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { AnimatedText } from 'remotion-animate-text';
import { z } from 'zod';

import Logo2 from '../components/Logo2';
import Image2 from '../components/Image2';
import { Background } from '../components/Background';
import { BackgroundProps } from '../backgrounds';
import { colorVar } from '../lib/helpers';

export const scene2Schema = z.object({
  logo: z.string(),
  img: z.string(),
  title: z.string(),
});

type Scene2Props = z.infer<typeof scene2Schema> & { background: BackgroundProps };

const Scene2: React.FC<Scene2Props> = (props) => {
  const frame = useCurrentFrame();

  const animation = {
    delimiter: '',
    opacity: [Math.random(), 1],
    x: [1, 0],
    y: [1, 0],
    scale: [0, 1],
    rotate: [Math.abs(90 - frame) % 45, 0],
    durations: [50],
    refRange: [0, props.title.length],
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

        <h2
          style={{
            color: 'white',
            fontSize: '7rem',
            lineHeight: '6rem',
            zIndex: 9,
            width: '40%',
            margin: 0,
          }}
        >
          <AnimatedText duration={60} animation={animation}>
            {props.title}
          </AnimatedText>
        </h2>

        <Image2 img={props.img} radius={400} strokeColor={colorVar('amaRed')} strokeWidth={50} />
      </div>
    </AbsoluteFill>
  );
};

export default Scene2;
