import { AbsoluteFill, Sequence } from 'remotion';
import { z } from 'zod';

import Image5 from '../components/Image5';
import Logo from '../components/Logo';
import { Background } from '../components/Background';
import { BackgroundProps } from '../backgrounds';
import { WIDTH } from '../lib/consts';
import { colorVar } from '../lib/helpers';

export const scene5Schema = z.object({
  logo: z.string(),
  img: z.string(),
  title: z.string(),
});

type Scene5Props = z.infer<typeof scene5Schema> & { background: BackgroundProps };

const Scene5: React.FC<Scene5Props> = (props) => {
  return (
    <AbsoluteFill>
      <Background {...props.background} />
      <Sequence from={-10}>
        <div
          style={{
            display: 'flex',
            margin: '100px',
            paddingTop: '100px',
            justifyContent: 'space-between',
            width: WIDTH,
          }}
        >
          <div style={{ position: 'relative' }}>
            <Logo logo={props.logo} radius={180} direction="from-left" />
          </div>
          <Image5 img={props.img} radius={400} strokeColor={colorVar('amaRed')} strokeWidth={50} />
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};

export default Scene5;
