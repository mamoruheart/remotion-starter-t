import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { z } from 'zod';

import Image1 from '../components/Image1';
import { Background } from '../components/Background';
import { BackgroundProps } from '../backgrounds';
import { colorVar } from '../lib/helpers';

export const scene1Schema = z.object({
  logo: z.string(),
  label1: z.string(),
  label2: z.string(),
});

type Scene1Props = z.infer<typeof scene1Schema> & { background: BackgroundProps };

const Scene1: React.FC<Scene1Props> = (props) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: 'black',
        opacity,
      }}
    >
      <Background {...props.background} />
      <div
        style={{
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image1
          img={props.logo}
          radius={400}
          strokeColor={colorVar('amaRed')}
          strokeWidth={50}
          label1={props.label1}
          label2={props.label2}
        />
      </div>
    </AbsoluteFill>
  );
};

export default Scene1;
