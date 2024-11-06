import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { z } from 'zod';

import Image6 from '../components/Image6';
import { Background } from '../components/Background';
import { BackgroundProps } from '../backgrounds';
import { colorVar } from '../lib/helpers';

export const scene6Schema = z.object({
  logo: z.string(),
  label1: z.string(),
  label2: z.string(),
});

type Scene6Props = z.infer<typeof scene6Schema> & { background: BackgroundProps };

const Scene6: React.FC<Scene6Props> = (props) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 90, 120], [1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
        <Image6
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

export default Scene6;
